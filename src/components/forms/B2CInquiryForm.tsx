'use client';

import { useMemo, useState } from 'react';
import { submitFormToRealtimeDb } from '@/components/forms/_submit';
import {
  helpTextBase,
  inputBase,
  labelBase,
  primaryButtonBase,
  secondaryButtonBase,
  selectBase,
  textareaBase,
} from '@/components/forms/_formStyles';

type FormState = {
  name: string;
  phone: string;
  email: string;
  region: string;
  housingType: string;
  frequency: string;
  wasteTypes: string;
  preferredTime: string;
  message: string;
};

const LABELS: Record<keyof FormState, string> = {
  name: '이름',
  phone: '연락처',
  email: '이메일',
  region: '이용 지역',
  housingType: '주거 형태',
  frequency: '희망 이용 주기',
  wasteTypes: '필요 서비스',
  preferredTime: '희망 시간대',
  message: '문의 내용',
};

export function B2CInquiryForm() {
  const [state, setState] = useState<FormState>({
    name: '',
    phone: '',
    email: '',
    region: '',
    housingType: '',
    frequency: '',
    wasteTypes: '',
    preferredTime: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const missing = useMemo(() => {
    const required: Array<keyof FormState> = ['name', 'phone', 'region'];
    return required.filter((k) => !String(state[k]).trim());
  }, [state]);

  const canSubmit = missing.length === 0;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    setIsSubmitting(true);
    setSubmitError(null);
    try {
      await submitFormToRealtimeDb({
        formType: 'b2c',
        data: {
          name: state.name,
          phone: state.phone,
          email: state.email || '',
          serviceRegion: state.region,
          housingType: state.housingType || '',
          desiredCycle: state.frequency || '',
          neededService: state.wasteTypes || '',
          desiredTime: state.preferredTime || '',
          message: state.message || '',
          status: 'submitted',
          createdAt: Date.now(),
        },
      });
      setSubmitted(true);
    } catch (error) {
      const message = error instanceof Error ? error.message : '문의 저장 실패';
      setSubmitError(`문의 저장 중 오류가 발생했습니다. ${message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const reset = () => {
    setState({
      name: '',
      phone: '',
      email: '',
      region: '',
      housingType: '',
      frequency: '',
      wasteTypes: '',
      preferredTime: '',
      message: '',
    });
    setSubmitted(false);
    setSubmitError(null);
  };

  const isEmpty =
    !state.name && !state.phone && !state.region && !state.email && !state.message;

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className={labelBase} htmlFor="b2c-name">
            이름 <span className="text-primary">*</span>
          </label>
          <input
            id="b2c-name"
            className={inputBase}
            value={state.name}
            onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
            autoComplete="name"
            placeholder="홍길동"
            required
          />
        </div>

        <div className="space-y-2">
          <label className={labelBase} htmlFor="b2c-phone">
            연락처 <span className="text-primary">*</span>
          </label>
          <input
            id="b2c-phone"
            className={inputBase}
            value={state.phone}
            onChange={(e) => setState((s) => ({ ...s, phone: e.target.value }))}
            autoComplete="tel"
            inputMode="tel"
            placeholder="010-1234-5678"
            required
          />
        </div>

        <div className="space-y-2 sm:col-span-2">
          <label className={labelBase} htmlFor="b2c-email">
            이메일
          </label>
          <input
            id="b2c-email"
            className={inputBase}
            value={state.email}
            onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))}
            autoComplete="email"
            inputMode="email"
            placeholder="name@example.com"
          />
          <p className={helpTextBase}>안내를 메일로 받으시려면 입력해주세요.</p>
        </div>

        <div className="space-y-2 sm:col-span-2">
          <label className={labelBase} htmlFor="b2c-region">
            이용 지역 <span className="text-primary">*</span>
          </label>
          <input
            id="b2c-region"
            className={inputBase}
            value={state.region}
            onChange={(e) => setState((s) => ({ ...s, region: e.target.value }))}
            placeholder="예) 서울 ○○구 / ○○아파트"
            required
          />
        </div>

        <div className="space-y-2">
          <label className={labelBase} htmlFor="b2c-housing">
            주거 형태
          </label>
          <select
            id="b2c-housing"
            className={selectBase}
            value={state.housingType}
            onChange={(e) => setState((s) => ({ ...s, housingType: e.target.value }))}
          >
            <option value="">선택</option>
            <option value="아파트">아파트</option>
            <option value="오피스텔">오피스텔</option>
            <option value="연립·다세대">연립·다세대</option>
            <option value="단독·다가구">단독·다가구</option>
            <option value="기타">기타</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className={labelBase} htmlFor="b2c-frequency">
            희망 이용 주기
          </label>
          <select
            id="b2c-frequency"
            className={selectBase}
            value={state.frequency}
            onChange={(e) => setState((s) => ({ ...s, frequency: e.target.value }))}
          >
            <option value="">선택</option>
            <option value="주 1회">주 1회</option>
            <option value="주 2회 이상">주 2회 이상</option>
            <option value="격주">격주</option>
            <option value="필요할 때마다">필요할 때마다</option>
            <option value="상담 후 결정">상담 후 결정</option>
          </select>
        </div>

        <div className="space-y-2 sm:col-span-2">
          <label className={labelBase} htmlFor="b2c-waste">
            필요 서비스
          </label>
          <input
            id="b2c-waste"
            className={inputBase}
            value={state.wasteTypes}
            onChange={(e) => setState((s) => ({ ...s, wasteTypes: e.target.value }))}
            placeholder="예) 분리수거, 일반쓰레기 배출, 둘 다"
          />
        </div>

        <div className="space-y-2 sm:col-span-2">
          <label className={labelBase} htmlFor="b2c-time">
            희망 시간대
          </label>
          <input
            id="b2c-time"
            className={inputBase}
            value={state.preferredTime}
            onChange={(e) => setState((s) => ({ ...s, preferredTime: e.target.value }))}
            placeholder="예) 평일 저녁, 주말 오전"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className={labelBase} htmlFor="b2c-message">
          추가 문의
        </label>
        <textarea
          id="b2c-message"
          className={textareaBase}
          value={state.message}
          onChange={(e) => setState((s) => ({ ...s, message: e.target.value }))}
          placeholder="가구 구성, 배출물 양, 궁금한 점 등을 자유롭게 적어주세요."
        />
      </div>

      {!canSubmit ? (
        <p className="text-sm text-muted">
          필수 항목을 입력해주세요: {missing.map((k) => LABELS[k]).join(', ')}
        </p>
      ) : null}

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-xs text-muted">제출 내용은 실시간으로 저장됩니다.</div>
        <div className="flex gap-2 justify-center">
          <button
            type="button"
            className={secondaryButtonBase}
            onClick={reset}
            disabled={submitted && isEmpty}
          >
            초기화
          </button>
          <button type="submit" className={primaryButtonBase} disabled={!canSubmit || isSubmitting}>
            문의
          </button>
        </div>
      </div>
      {submitError ? <p className="text-sm text-warning">{submitError}</p> : null}
      {submitted ? <p className="text-sm text-primary">문의가 접수되었습니다.</p> : null}
    </form>
  );
}
