export const trustSystemContent = {
  eyebrow: 'Trust system',
  title: '동네 이웃이지만, 검증된 워커입니다',
  description:
    '스팟워크의 신뢰는 워커 운영 체계에서 비롯됩니다. 신원 확인을 기본으로, 양방향 평점·리뷰와 지자체 배출 가이드 교육이 결합된 운영 구조입니다.',
  pillars: [
    {
      iconKey: 'shield',
      title: '신원 확인 · 활동 이력 관리',
      body: '워커 등록 시 신원 확인 절차를 거치고, 활동 이력을 지속 관리합니다. 동일 지역에서 반복 매칭 시 평점이 좋은 워커가 우선 배정됩니다.',
    },
    {
      iconKey: 'star',
      title: '양방향 평점 · 리뷰',
      body: '고객이 매번 작업 결과를 평가합니다. 일정 수준 이하의 평가가 누적된 워커는 매칭 우선순위에서 제외되거나 활동이 제한됩니다.',
    },
    {
      iconKey: 'graduation',
      title: '지자체 배출 가이드 교육',
      body: '분리수거 기준 미숙지로 인한 잘못된 배출을 방지하기 위해, 워커 등록 시 지자체별 배출 가이드 교육을 필수로 이수합니다.',
    },
  ],
} as const;
