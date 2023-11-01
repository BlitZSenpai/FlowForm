import { GetFormStats } from "@/actions/form";
import { StatsCard } from "@/components/statscard";
import { Suspense } from "react";
import { LuView } from "react-icons/lu";

export default function Home() {
  return (
    <div className="container pt-4">
      <Suspense>
        <CardStatsWrapper />
      </Suspense>
    </div>
  );
}

async function CardStatsWrapper() {
  const stats = await GetFormStats();
  return <StatsCards loading={false} data={stats} />;
}

interface StatsCardsProps {
  data: Awaited<ReturnType<typeof GetFormStats>>;
  loading: boolean;
}

function StatsCards(props: StatsCardsProps) {
  const { data, loading } = props;

  return (
    <div className="w-full pt-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="Total visits"
        icon={<LuView className="text-blue-600" />}
        helperText="All time form visits"
        value={data.visits.toLocaleString()}
        loading={loading}
        className="shadow-md shadow-blue-600"
      />
    </div>
  );
}
