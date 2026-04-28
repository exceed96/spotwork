import Image from 'next/image';

export function HeroSection() {
  return (
    <section>
      <Image
        src="/hero-banner.png"
        alt="분리수거·일반쓰레기 배출 대행 서비스 출시"
        width={502}
        height={282}
        priority
        className="mx-auto w-full max-w-5xl"
      />
    </section>
  );
}
