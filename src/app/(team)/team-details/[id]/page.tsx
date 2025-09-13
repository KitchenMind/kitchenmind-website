import team_data from "@/data/team-data";
import TeamDetailsMain from "@/pages/team/team-details";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liko - Team Details page",
};

// Generate static params for static export
export async function generateStaticParams() {
  return team_data
    .filter((team) => team && team.id)
    .map((team) => ({
      id: team.id.toString(),
    }));
}

export default function TeamDetailsPage({params}: {params: { id: string }}) {
  const team = [...team_data].find((t) => t.id === Number(params.id));
  return team ? (
    <TeamDetailsMain item={team} />
  ) : (
    <div className="text-center pt-100">
      Team not found with id: {params.id}
    </div>
  );
}
