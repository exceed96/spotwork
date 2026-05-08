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
  company: string;
  contactName: string;
  email: string;
  phone: string;
  officeSize: string;
  region: string;
  message: string;
};

const FIELD_LABELS: Record<keyof FormState, string> = {
  company: '회사/기관명',
  contactName: '담당자명',
  email: '이메일',
  phone: '연락처',
  officeSize: '사무실 규모',
  region: '지역/주소',
  message: '문의 내용',
};

export function B2BInquiryForm() {
  const [state, setState] = useState<FormState>({
    company: '',
    contactName: '',
    email: '',
    phone: '',
    officeSize: '',
    region: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const missing = useMemo(() => {
    const required: Array<keyof FormState> = ['company', 'contactName', 'phone', 'region'];
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
        formType: 'b2b',
        data: {
          companyName: state.company,
          managerName: state.contactName,
          phone: state.phone,
          email: state.email || '',
          officeSize: state.officeSize || '',
          address: state.region,
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
      company: '',
      contactName: '',
      email: '',
      phone: '',
      officeSize: '',
      region: '',
      message: '',
    });
    setSubmitted(false);
    setSubmitError(null);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className={labelBase} htmlFor="b2b-company">
            회사/기관명 <span className="text-primary">*</span>
          </label>
          <input
            id="b2b-company"
            className={inputBase}
            value={state.company}
            onChange={(e) => setState((s) => ({ ...s, company: e.target.value }))}
            placeholder="예) 스팟워크"
            required
          />
        </div>

        <div className="space-y-2">
          <label className={labelBase} htmlFor="b2b-contact">
            담당자명 <span className="text-primary">*</span>
          </label>
          <input
            id="b2b-contact"
            className={inputBase}
            value={state.contactName}
            onChange={(e) => setState((s) => ({ ...s, contactName: e.target.value }))}
            autoComplete="name"
            placeholder="홍길동"
            required
          />
        </div>

        <div className="space-y-2">
          <label className={labelBase} htmlFor="b2b-phone">
            연락처 <span className="text-primary">*</span>
          </label>
          <input
            id="b2b-phone"
            className={inputBase}
            value={state.phone}
            onChange={(e) => setState((s) => ({ ...s, phone: e.target.value }))}
            autoComplete="tel"
            inputMode="tel"
            placeholder="010-1234-5678"
            required
          />
        </div>

        <div className="space-y-2">
          <label className={labelBase} htmlFor="b2b-email">
            이메일
          </label>
          <input
            id="b2b-email"
            className={inputBase}
            value={state.email}
            onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))}
            autoComplete="email"
            inputMode="email"
            placeholder="name@company.com"
          />
          <p className={helpTextBase}>견적/안내 메일을 받을 주소가 있으면 입력해주세요.</p>
        </div>

        <div className="space-y-2">
          <label className={labelBase} htmlFor="b2b-size">
            사무실 규모
          </label>
          <input
            id="b2b-size"
            className={inputBase}
            value={state.officeSize}
            onChange={(e) => setState((s) => ({ ...s, officeSize: e.target.value }))}
            placeholder="예) 10~50인 / 100평"
          />
        </div>

        <div className="space-y-2">
          <label className={labelBase} htmlFor="b2b-region">
            지역/주소 <span className="text-primary">*</span>
          </label>
          <input
            id="b2b-region"
            className={inputBase}
            value={state.region}
            onChange={(e) => setState((s) => ({ ...s, region: e.target.value }))}
            placeholder="예) 서울 성동구 성수동"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className={labelBase} htmlFor="b2b-message">
          문의 내용
        </label>
        <textarea
          id="b2b-message"
          className={textareaBase}
          value={state.message}
          onChange={(e) => setState((s) => ({ ...s, message: e.target.value }))}
          placeholder="희망 서비스/방문 주기/현재 배출 방식 등을 적어주시면 더 빠르게 안내드려요."
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
            disabled={submitted && !state.company && !state.contactName && !state.phone && !state.region}
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

