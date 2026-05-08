const DB_URL = process.env.NEXT_PUBLIC_FIREBASE_DB_URL;

type SubmitPayload = {
  formType: 'worker' | 'b2b' | 'b2c';
  data: Record<string, string | number | boolean | null>;
};

export const submitFormToRealtimeDb = async ({ formType, data }: SubmitPayload) => {
  const endpoint = new URL(`${DB_URL}/inquiries/${formType}.json`);

  const response = await fetch(endpoint.toString(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    let detail = '';
    try {
      const errorBody = await response.json();
      detail = errorBody?.error ? ` (${String(errorBody.error)})` : '';
    } catch {
      detail = '';
    }
    throw new Error(`요청 저장 실패: ${response.status}${detail}`);
  }

  return response.json();
};

