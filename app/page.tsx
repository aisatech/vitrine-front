import { DashboardApp } from '@/components/dashboard/DashboardApp';
import { EventPreview } from '@/components/dashboard/EventPreview';

export default function Home() {
  return (
    <>
      <div className="bg-[var(--color-bg)] px-6 pt-10">
        <div className="mx-auto max-w-6xl">
          <EventPreview />
        </div>
      </div>
      <DashboardApp />
    </>
  );
}
