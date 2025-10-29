import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wind, Waves, Flame, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const activities = [
  {
    id: 1,
    title: "Activity 1",
    name: "Hybrid Biogas-Wind Energy System",
    description: "Design a hybrid renewable energy system combining biogas and wind energy to power a rural health clinic.",
    icon: Wind,
    url: "/activity-1",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-950/30",
  },
  {
    id: 2,
    title: "Activity 2",
    name: "Wave Energy Conversion System",
    description: "Block diagram of a wave energy conversion system integrated into a coastal desalination plant.",
    icon: Waves,
    url: "/activity-2",
    color: "text-cyan-600 dark:text-cyan-400",
    bgColor: "bg-cyan-50 dark:bg-cyan-950/30",
  },
  {
    id: 3,
    title: "Activity 3",
    name: "Geothermal Power Plant System",
    description: "Design a geothermal power plant system for electricity generation in a region with hot water wells.",
    icon: Flame,
    url: "/activity-3",
    color: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-orange-50 dark:bg-orange-950/30",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4" data-testid="text-page-title">
            Renewable Energy Systems Portfolio
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-page-description">
            A comprehensive technical portfolio showcasing three innovative renewable energy system 
            designs with detailed block diagrams, conversion processes, and real-world applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <Card
              key={activity.id}
              className="hover-elevate transition-all duration-300 overflow-hidden group"
              data-testid={`card-activity-${activity.id}`}
            >
              <CardHeader className="space-y-4">
                <div className={`w-16 h-16 rounded-lg ${activity.bgColor} flex items-center justify-center`}>
                  <activity.icon className={`w-8 h-8 ${activity.color}`} />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-2">
                    {activity.title}
                  </p>
                  <CardTitle className="text-xl" data-testid={`text-activity-${activity.id}-title`}>{activity.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="leading-relaxed" data-testid={`text-activity-${activity.id}-description`}>
                  {activity.description}
                </CardDescription>
                <Link href={activity.url}>
                  <Button
                    variant="default"
                    className="w-full group"
                    data-testid={`button-view-activity-${activity.id}`}
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 border-t border-border pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div data-testid="stat-energy-systems">
              <h3 className="text-3xl font-bold text-foreground mb-2">3</h3>
              <p className="text-sm text-muted-foreground">Energy Systems</p>
            </div>
            <div data-testid="stat-renewable">
              <h3 className="text-3xl font-bold text-foreground mb-2">100%</h3>
              <p className="text-sm text-muted-foreground">Renewable</p>
            </div>
            <div data-testid="stat-carbon-emissions">
              <h3 className="text-3xl font-bold text-foreground mb-2">0</h3>
              <p className="text-sm text-muted-foreground">Carbon Emissions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
