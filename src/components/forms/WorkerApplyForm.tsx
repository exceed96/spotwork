'use client';

import { useMemo, useState } from 'react';
import { submitFormToRealtimeDb } from '@/components/forms/_submit';
import {
  helpTextBase,
  inputBase,
  labelBase,
  primaryButtonBase,
  secondaryButtonBase,
  textareaBase,
} from '@/components/forms/_formStyles';

type FormState = {
  name: string;
  age: string;
  phone: string;
  email: string;
  activityRegion: string;
  availableTime: string;
  memo: string;
};

const FIELD_LABELS: Record<keyof FormState, string> = {
  name: '이름',
  age: '나이',
  phone: '연락처',
  email: '이메일',
  activityRegion: '활동 지역',
  availableTime: '가능 시간대',
  memo: '추가 내용',
};

export function WorkerApplyForm() {
  const [state, setState] = useState<FormState>({
    name: '',
    age: '',
    phone: '',
    email: '',
    activityRegion: '',
    availableTime: '',
    memo: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const missing = useMemo(() => {
    const required: Array<keyof FormState> = ['name', 'age', 'phone', 'activityRegion'];
    return required.filter((k) => !String(state[k]).trim());
  }, [state]);

  const canSubmit = missing.length === 0;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const parsedAge = Number.parseInt(state.age, 10);
      if (!Number.isFinite(parsedAge)) {
        throw new Error('나이는 숫자로 입력해주세요.');
      }

      await submitFormToRealtimeDb({
        formType: 'worker',
        data: {
          name: state.name,
          age: parsedAge,
          phone: state.phone,
          email: state.email || '',
          activityRegion: state.activityRegion,
          availableTime: state.availableTime || '',
          memo: state.memo || '',
          status: 'submitted',
        },
      });
      setSubmitted(true);
    } catch (error) {
      const message = error instanceof Error ? error.message : '신청 저장 실패';
      setSubmitError(`신청 저장 중 오류가 발생했습니다. ${message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const reset = () => {
    setState({
      name: '',
      age: '',
      phone: '',
      email: '',
      activityRegion: '',
      availableTime: '',
      memo: '',
    });
    setSubmitted(false);
    setSubmitError(null);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className={labelBase} htmlFor="wa-name">
            이름 <span className="text-primary">*</span>
          </label>
          <input
            id="wa-name"
            className={inputBase}
            value={state.name}
            onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
            autoComplete="name"
            placeholder="홍길동"
            required
          />
        </div>

        <div className="space-y-2">
          <label className={labelBase} htmlFor="wa-phone">
            연락처 <span className="text-primary">*</span>
          </label>
          <input
            id="wa-phone"
            className={inputBase}
            value={state.phone}
            onChange={(e) => setState((s) => ({ ...s, phone: e.target.value }))}
            autoComplete="tel"
            inputMode="tel"
            placeholder="010-1234-5678"
            required
          />
          <p className={helpTextBase}>연락 가능한 번호를 입력해주세요.</p>
        </div>

        <div className="space-y-2">
          <label className={labelBase} htmlFor="wa-age">
            나이(만) <span className="text-primary">*</span>
          </label>
          <input
            id="wa-age"
            type="number"
            className={inputBase}
            value={state.age}
            min={14}
            max={100}
            inputMode="numeric"
            onChange={(e) => setState((s) => ({ ...s, age: e.target.value }))}
            placeholder="예) 34"
            required
          />
        </div>

        <div className="space-y-2">
          <label className={labelBase} htmlFor="wa-email">
            이메일
          </label>
          <input
            id="wa-email"
            className={inputBase}
            value={state.email}
            onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))}
            autoComplete="email"
            inputMode="email"
            placeholder="name@example.com"
          />
        </div>

        <div className="space-y-2 sm:col-span-2">
          <label className={labelBase} htmlFor="wa-activityRegion">
            활동 지역 <span className="text-primary">*</span>
          </label>
          <input
            id="wa-activityRegion"
            className={inputBase}
            value={state.activityRegion}
            onChange={(e) => setState((s) => ({ ...s, activityRegion: e.target.value }))}
            placeholder="예) 성수/광진/송파"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className={labelBase} htmlFor="wa-availableTime">
          가능 시간대
        </label>
        <input
          id="wa-availableTime"
          className={inputBase}
          value={state.availableTime}
          onChange={(e) => setState((s) => ({ ...s, availableTime: e.target.value }))}
          placeholder="예) 평일 저녁, 주말 오전"
        />
      </div>

      <div className="space-y-2">
        <label className={labelBase} htmlFor="wa-memo">
          추가 내용
        </label>
        <textarea
          id="wa-memo"
          className={textareaBase}
          value={state.memo}
          onChange={(e) => setState((s) => ({ ...s, memo: e.target.value }))}
          placeholder="경험/가능 일정/궁금한 점 등을 자유롭게 적어주세요."
        />
      </div>

      {!canSubmit ? (
        <p className="text-sm text-muted">
          필수 항목을 입력해주세요: {missing.map((k) => FIELD_LABELS[k]).join(', ')}
        </p>
      ) : null}

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-xs text-muted">제출 내용은 실시간으로 저장됩니다.</div>
        <div className="flex gap-2 justify-center">
          <button
            type="button"
            className={secondaryButtonBase}
            onClick={reset}
            disabled={submitted && !state.name && !state.age && !state.phone && !state.activityRegion}
          >
            초기화
          </button>
          <button type="submit" className={primaryButtonBase} disabled={!canSubmit || isSubmitting}>
            신청
          </button>
        </div>
      </div>
      <p className="rounded-md bg-primary/10 px-3 py-2 text-xs font-semibold text-primary">
        입력하신 개인정보는 문의/신청 처리 목적 외에는 사용되지 않습니다.
      </p>
      {submitError ? <p className="text-sm text-warning">{submitError}</p> : null}
      {submitted ? <p className="text-sm text-primary">신청이 접수되었습니다.</p> : null}
    </form>
  );
}

