import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame, RefreshCw, Target, Building2 } from "lucide-react";
import { useState } from "react";

export default function Activity3() {
  const [hoveredComponent, setHoveredComponent] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-orange-50 dark:bg-orange-950/30 flex items-center justify-center">
              <Flame className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Activity 3
              </p>
              <h1 className="text-4xl font-bold text-foreground" data-testid="text-activity-title">
                Geothermal Power Plant System
              </h1>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed" data-testid="text-overview">
            A binary cycle geothermal power plant that extracts heat from hot water wells to generate 
            baseload electricity with minimal environmental impact and 24/7 reliability.
          </p>
          
          {/* Comprehensive Explanation */}
          <div className="mt-8 p-6 rounded-lg bg-muted/30">
            <p className="text-sm text-foreground leading-relaxed" data-testid="text-comprehensive-explanation">
              This binary cycle geothermal power plant extracts Earth's natural heat from underground hot water reservoirs 1-2 miles deep, 
              where groundwater is naturally heated to 107-182°C (225-360°F) by the planet's geothermal gradient. Production wells pump 
              hot water to the surface, where it passes through heat exchangers that transfer thermal energy to a secondary working fluid 
              (isobutane/isopentane) with a low boiling point. The working fluid vaporizes, spins a turbine-generator set to produce electricity, 
              then condenses in cooling towers for reuse. The binary configuration uses two separate loops to prevent geothermal water contamination 
              and maximize efficiency. After heat extraction, cooled geothermal water is reinjected through separate wells to maintain reservoir 
              pressure and sustainability. The system generates 1-100+ MW of continuous baseload electricity with 95%+ capacity factor, providing 
              reliable 24/7 power independent of weather conditions. With less than 1% of fossil fuel CO₂ emissions and a small 404 m² footprint 
              per GWh, geothermal plants are ideal for volcanic and tectonic regions, powering communities worldwide from Iceland to the Philippines 
              with decades-long operational lifespans.
            </p>
          </div>
        </div>

        {/* Block Diagram */}
        <Card className="mb-12" data-testid="card-block-diagram">
          <CardHeader>
            <CardTitle data-testid="text-block-diagram-title">System Block Diagram - Binary Cycle Configuration</CardTitle>
            <CardDescription data-testid="text-block-diagram-description">
              Closed-loop heat extraction, binary fluid vaporization, and sustainable water reinjection
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <svg
              viewBox="0 0 800 950"
              className="w-full h-auto"
              style={{ maxHeight: "950px" }}
            >
              <defs>
                <marker
                  id="arrowhead-3"
                  markerWidth="10"
                  markerHeight="10"
                  refX="9"
                  refY="3"
                  orient="auto"
                >
                  <polygon
                    points="0 0, 10 3, 0 6"
                    className="fill-orange-600 dark:fill-orange-400"
                  />
                </marker>
                <marker
                  id="arrowhead-cold"
                  markerWidth="10"
                  markerHeight="10"
                  refX="9"
                  refY="3"
                  orient="auto"
                >
                  <polygon
                    points="0 0, 10 3, 0 6"
                    className="fill-blue-600 dark:fill-blue-400"
                  />
                </marker>
                <filter id="shadow-3" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.1" />
                </filter>
                <linearGradient id="heatGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" className="stop-orange-600" />
                  <stop offset="100%" className="stop-red-600" />
                </linearGradient>
              </defs>

              {/* Underground Reservoir */}
              <g>
                <text x="400" y="30" className="fill-foreground font-semibold text-sm" textAnchor="middle">
                  UNDERGROUND GEOTHERMAL RESERVOIR
                </text>
                <rect x="50" y="50" width="700" height="140" rx="8" className="fill-orange-50 dark:fill-orange-950/30 stroke-orange-500 stroke-2" filter="url(#shadow-3)" />
                
                {/* Geothermal Zone */}
                <g
                  data-testid="svg-component-geothermal-reservoir"
                  onMouseEnter={() => setHoveredComponent("reservoir")}
                  onMouseLeave={() => setHoveredComponent(null)}
                  className="cursor-pointer transition-opacity"
                  style={{ opacity: hoveredComponent && hoveredComponent !== "reservoir" ? 0.5 : 1 }}
                >
                  <rect x="250" y="80" width="300" height="80" rx="8" className="fill-red-100 dark:fill-red-900/40 stroke-red-500 stroke-2" />
                  <text x="400" y="105" className="fill-foreground font-medium text-sm" textAnchor="middle">Hot Water Reservoir</text>
                  <text x="400" y="125" className="fill-muted-foreground text-xs font-mono" textAnchor="middle">Depth: 1-2 miles (1.5-4.5 km)</text>
                  <text x="400" y="140" className="fill-muted-foreground text-xs font-mono" textAnchor="middle">Temperature: 107-182°C (225-360°F)</text>
                  <text x="400" y="155" className="fill-muted-foreground text-xs" textAnchor="middle">Hot Rocks Heat Groundwater</text>
                </g>

                <text x="400" y="180" className="fill-orange-600 dark:fill-orange-400 text-xs font-semibold" textAnchor="middle">
                  Naturally Heated by Earth's Geothermal Gradient
                </text>
              </g>

              {/* Production Well */}
              <g
                data-testid="svg-component-production-well"
                onMouseEnter={() => setHoveredComponent("production")}
                onMouseLeave={() => setHoveredComponent(null)}
                className="cursor-pointer transition-opacity"
                style={{ opacity: hoveredComponent && hoveredComponent !== "production" ? 0.5 : 1 }}
              >
                <rect x="150" y="220" width="140" height="100" rx="8" className="fill-red-50 dark:fill-red-950/30 stroke-red-500 stroke-2" filter="url(#shadow-3)" />
                <text x="220" y="245" className="fill-foreground font-medium text-xs" textAnchor="middle">Production Well</text>
                <text x="220" y="265" className="fill-muted-foreground text-xs" textAnchor="middle">Hot Water Extraction</text>
                <text x="220" y="280" className="fill-muted-foreground text-xs font-mono" textAnchor="middle">150-180°C</text>
                <text x="220" y="295" className="fill-muted-foreground text-xs" textAnchor="middle">High Pressure</text>
                <text x="220" y="310" className="fill-muted-foreground text-xs" textAnchor="middle">Pumped to Surface</text>
              </g>
              <path d="M 400 160 L 220 190 L 220 220" className="stroke-orange-600 dark:stroke-orange-400 stroke-2" markerEnd="url(#arrowhead-3)" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
              </path>

              {/* Heat Exchanger */}
              <g>
                <text x="400" y="360" className="fill-foreground font-semibold text-sm" textAnchor="middle">
                  BINARY CYCLE HEAT EXCHANGE
                </text>
                <rect x="50" y="380" width="700" height="200" rx="8" className="fill-card stroke-card-border stroke-2" filter="url(#shadow-3)" />
                
                {/* Heat Exchanger Main */}
                <g
                  data-testid="svg-component-heat-exchanger"
                  onMouseEnter={() => setHoveredComponent("heatex")}
                  onMouseLeave={() => setHoveredComponent(null)}
                  className="cursor-pointer transition-opacity"
                  style={{ opacity: hoveredComponent && hoveredComponent !== "heatex" ? 0.5 : 1 }}
                >
                  <rect x="250" y="410" width="300" height="130" rx="8" className="fill-purple-50 dark:fill-purple-950/30 stroke-purple-500 stroke-2" />
                  <text x="400" y="435" className="fill-foreground font-medium text-sm" textAnchor="middle">Heat Exchanger</text>
                  <text x="400" y="455" className="fill-muted-foreground text-xs" textAnchor="middle">Two Separate Fluid Loops (Binary System)</text>
                  
                  <line x1="280" y1="470" x2="520" y2="470" className="stroke-border stroke-1" />
                  
                  <text x="300" y="490" className="fill-red-600 dark:fill-red-400 text-xs font-semibold">Loop 1: Geothermal Water</text>
                  <text x="300" y="505" className="fill-muted-foreground text-xs font-mono">150-180°C → 70-90°C</text>
                  <text x="300" y="520" className="fill-muted-foreground text-xs">Heat Transfer Only</text>
                  
                  <rect x="440" y="475" width="2" height="55" className="fill-border" />
                  
                  <text x="460" y="490" className="fill-blue-600 dark:fill-blue-400 text-xs font-semibold">Loop 2: Working Fluid</text>
                  <text x="460" y="505" className="fill-muted-foreground text-xs">Isobutane/Isopentane</text>
                  <text x="460" y="520" className="fill-muted-foreground text-xs">Low Boiling Point</text>
                </g>

                {/* Secondary Fluid In */}
                <g>
                  <rect x="80" y="480" width="130" height="60" rx="8" className="fill-blue-50 dark:fill-blue-950/30 stroke-blue-500 stroke-2" />
                  <text x="145" y="502" className="fill-foreground font-medium text-xs" textAnchor="middle">Working Fluid</text>
                  <text x="145" y="517" className="fill-muted-foreground text-xs" textAnchor="middle">Liquid State</text>
                  <text x="145" y="532" className="fill-muted-foreground text-xs" textAnchor="middle">Low Temp</text>
                </g>

                {/* Secondary Fluid Out */}
                <g>
                  <rect x="590" y="480" width="130" height="60" rx="8" className="fill-teal-50 dark:fill-teal-950/30 stroke-teal-500 stroke-2" />
                  <text x="655" y="502" className="fill-foreground font-medium text-xs" textAnchor="middle">Working Fluid</text>
                  <text x="655" y="517" className="fill-muted-foreground text-xs" textAnchor="middle">Vapor State</text>
                  <text x="655" y="532" className="fill-muted-foreground text-xs" textAnchor="middle">High Pressure</text>
                </g>

                <path d="M 220 320 L 220 380 L 300 380 L 300 410" className="stroke-orange-600 dark:stroke-orange-400 stroke-2" markerEnd="url(#arrowhead-3)" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
                </path>
                <path d="M 210 510 L 250 510" className="stroke-blue-600 dark:stroke-blue-400 stroke-2" markerEnd="url(#arrowhead-cold)" />
                <path d="M 550 510 L 590 510" className="stroke-teal-600 dark:stroke-teal-400 stroke-2" markerEnd="url(#arrowhead-3)" />
              </g>

              {/* Power Generation */}
              <g>
                <text x="400" y="620" className="fill-foreground font-semibold text-sm" textAnchor="middle">
                  ELECTRICITY GENERATION
                </text>
                <rect x="50" y="640" width="700" height="120" rx="8" className="fill-card stroke-card-border stroke-2" filter="url(#shadow-3)" />
                
                {/* Turbine */}
                <g
                  data-testid="svg-component-turbine"
                  onMouseEnter={() => setHoveredComponent("turbine")}
                  onMouseLeave={() => setHoveredComponent(null)}
                  className="cursor-pointer transition-opacity"
                  style={{ opacity: hoveredComponent && hoveredComponent !== "turbine" ? 0.5 : 1 }}
                >
                  <polygon points="250,700 280,670 310,700 310,720 280,750 250,720" className="fill-green-50 dark:fill-green-950/30 stroke-green-500 stroke-2" />
                  <circle cx="280" cy="710" r="25" className="fill-green-100 dark:fill-green-900/40 stroke-green-500 stroke-2" />
                  <text x="280" y="790" className="fill-foreground font-medium text-xs" textAnchor="middle">Turbine</text>
                </g>

                {/* Generator */}
                <g
                  data-testid="svg-component-generator"
                  onMouseEnter={() => setHoveredComponent("generator")}
                  onMouseLeave={() => setHoveredComponent(null)}
                  className="cursor-pointer transition-opacity"
                  style={{ opacity: hoveredComponent && hoveredComponent !== "generator" ? 0.5 : 1 }}
                >
                  <rect x="370" y="680" width="80" height="60" rx="8" className="fill-yellow-50 dark:fill-yellow-950/30 stroke-yellow-500 stroke-2" />
                  <circle cx="410" cy="710" r="15" className="fill-yellow-100 dark:fill-yellow-900/40 stroke-yellow-500 stroke-2" />
                  <text x="410" y="790" className="fill-foreground font-medium text-xs" textAnchor="middle">Generator</text>
                </g>

                {/* Output */}
                <g
                  data-testid="svg-component-electricity-output"
                  onMouseEnter={() => setHoveredComponent("output")}
                  onMouseLeave={() => setHoveredComponent(null)}
                  className="cursor-pointer transition-opacity"
                  style={{ opacity: hoveredComponent && hoveredComponent !== "output" ? 0.5 : 1 }}
                >
                  <rect x="510" y="670" width="160" height="80" rx="8" className="fill-amber-50 dark:fill-amber-950/30 stroke-amber-500 stroke-2" />
                  <text x="590" y="695" className="fill-foreground font-medium text-sm" textAnchor="middle">Electricity Output</text>
                  <text x="590" y="715" className="fill-muted-foreground text-xs font-mono" textAnchor="middle">1-100+ MW</text>
                  <text x="590" y="730" className="fill-muted-foreground text-xs" textAnchor="middle">Grid Connection</text>
                  <text x="590" y="745" className="fill-muted-foreground text-xs" textAnchor="middle">24/7 Baseload Power</text>
                </g>

                <path d="M 655 540 L 655 610 L 310 610 L 310 670" className="stroke-teal-600 dark:stroke-teal-400 stroke-2" markerEnd="url(#arrowhead-3)" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
                </path>
                <path d="M 305 710 L 370 710" className="stroke-green-600 dark:stroke-green-400 stroke-2" markerEnd="url(#arrowhead-3)" />
                <path d="M 450 710 L 510 710" className="stroke-amber-600 dark:stroke-amber-400 stroke-2" markerEnd="url(#arrowhead-3)" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
                </path>
              </g>

              {/* Cooling & Return */}
              <g>
                <text x="400" y="800" className="fill-foreground font-semibold text-sm" textAnchor="middle">
                  COOLING & REINJECTION
                </text>
                <rect x="50" y="820" width="700" height="120" rx="8" className="fill-card stroke-card-border stroke-2" filter="url(#shadow-3)" />
                
                {/* Condenser */}
                <g
                  data-testid="svg-component-condenser"
                  onMouseEnter={() => setHoveredComponent("condenser")}
                  onMouseLeave={() => setHoveredComponent(null)}
                  className="cursor-pointer transition-opacity"
                  style={{ opacity: hoveredComponent && hoveredComponent !== "condenser" ? 0.5 : 1 }}
                >
                  <rect x="130" y="850" width="140" height="70" rx="8" className="fill-blue-50 dark:fill-blue-950/30 stroke-blue-500 stroke-2" />
                  <text x="200" y="875" className="fill-foreground font-medium text-xs" textAnchor="middle">Condenser</text>
                  <text x="200" y="895" className="fill-muted-foreground text-xs" textAnchor="middle">Vapor → Liquid</text>
                  <text x="200" y="910" className="fill-muted-foreground text-xs" textAnchor="middle">Cooling Tower</text>
                </g>

                {/* Reinjection Well */}
                <g
                  data-testid="svg-component-reinjection-well"
                  onMouseEnter={() => setHoveredComponent("reinjection")}
                  onMouseLeave={() => setHoveredComponent(null)}
                  className="cursor-pointer transition-opacity"
                  style={{ opacity: hoveredComponent && hoveredComponent !== "reinjection" ? 0.5 : 1 }}
                >
                  <rect x="530" y="850" width="160" height="70" rx="8" className="fill-cyan-50 dark:fill-cyan-950/30 stroke-cyan-500 stroke-2" />
                  <text x="610" y="875" className="fill-foreground font-medium text-xs" textAnchor="middle">Reinjection Well</text>
                  <text x="610" y="895" className="fill-muted-foreground text-xs" textAnchor="middle">Cooled Water Returns</text>
                  <text x="610" y="910" className="fill-muted-foreground text-xs" textAnchor="middle">Sustainable Operation</text>
                </g>

                <path d="M 280 750 L 280 820 L 200 820 L 200 850" className="stroke-teal-600 dark:stroke-teal-400 stroke-2" markerEnd="url(#arrowhead-cold)" />
                <path d="M 500 540 L 500 610 L 750 610 L 750 885 L 690 885" className="stroke-blue-600 dark:stroke-blue-400 stroke-2" markerEnd="url(#arrowhead-cold)" />
                <path d="M 610 820 L 610 190 L 580 190 L 580 160" className="stroke-cyan-600 dark:stroke-cyan-400 stroke-2" markerEnd="url(#arrowhead-cold)" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1.5s" repeatCount="indefinite" />
                </path>
                <path d="M 200 820 L 100 820 L 100 510 L 80 510" className="stroke-blue-600 dark:stroke-blue-400 stroke-2" markerEnd="url(#arrowhead-cold)" />
              </g>

              {/* Legend */}
              <text x="400" y="930" className="fill-muted-foreground text-xs font-semibold" textAnchor="middle">
                Closed-Loop System: Geothermal water never mixes with working fluid • Zero Emissions • 24/7 Operation
              </text>
            </svg>
          </CardContent>
        </Card>

        {/* System Explanation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card data-testid="card-energy-source">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-orange-50 dark:bg-orange-950/30 flex items-center justify-center mb-4">
                <Flame className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <CardTitle className="text-lg" data-testid="text-energy-source-title">Energy Source</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-energy-source-explanation">
                Earth's geothermal heat from hot rock formations 1-2 miles underground. Hot water wells 
                tap into reservoirs where groundwater is naturally heated to 107-182°C (225-360°F) by 
                the planet's geothermal gradient. This renewable heat source is continuously replenished 
                and available 24/7 regardless of weather.
              </p>
            </CardContent>
          </Card>

          <Card data-testid="card-conversion">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-purple-50 dark:bg-purple-950/30 flex items-center justify-center mb-4">
                <RefreshCw className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <CardTitle className="text-lg" data-testid="text-conversion-title">Conversion Process</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-conversion-explanation">
                Binary cycle configuration uses heat exchanger to transfer thermal energy from geothermal 
                water to secondary working fluid (isobutane/isopentane) with low boiling point. Working 
                fluid vaporizes, spins turbine-generator set, then condenses in cooling tower. Two separate 
                loops prevent geothermal water contamination and maximize efficiency.
              </p>
            </CardContent>
          </Card>

          <Card data-testid="card-output">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-yellow-50 dark:bg-yellow-950/30 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <CardTitle className="text-lg" data-testid="text-output-title">Output & Utilization</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-output-explanation">
                Generates 1-100+ MW of continuous baseload electricity with 95%+ capacity factor. 
                Cooled water is reinjected to maintain reservoir pressure and sustainability. Produces 
                less than 1% of fossil fuel CO₂ emissions. Small 404 m² footprint per GWh. Ideal for 
                grid connection providing reliable 24/7 power independent of weather conditions.
              </p>
            </CardContent>
          </Card>

          <Card data-testid="card-applications">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-red-50 dark:bg-red-950/30 flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <CardTitle className="text-lg" data-testid="text-applications-title">Real-World Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-applications-explanation">
                Deployed worldwide: The Geysers (California), Larderello (Italy), Iceland's national grid, 
                New Zealand, Indonesia, Philippines. Perfect for volcanic/tectonic regions with hot water 
                wells. Powers industrial facilities, cities, and remote communities. Provides baseload 
                energy security with minimal land use and decades-long operational lifespan.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Technical Specifications */}
        <Card data-testid="card-specifications">
          <CardHeader>
            <CardTitle data-testid="text-specifications-title">Technical Specifications</CardTitle>
            <CardDescription data-testid="text-specifications-description">Key system parameters and performance metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-4 rounded-lg bg-muted" data-testid="spec-reservoir-temp">
                <p className="text-2xl font-bold font-mono text-foreground">107-182°C</p>
                <p className="text-xs text-muted-foreground mt-1">Reservoir Temp</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted" data-testid="spec-power-output">
                <p className="text-2xl font-bold font-mono text-foreground">1-100+</p>
                <p className="text-xs text-muted-foreground mt-1">Output (MW)</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted" data-testid="spec-capacity-factor">
                <p className="text-2xl font-bold font-mono text-foreground">95%+</p>
                <p className="text-xs text-muted-foreground mt-1">Capacity Factor</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted" data-testid="spec-emissions">
                <p className="text-2xl font-bold font-mono text-foreground">&lt;1%</p>
                <p className="text-xs text-muted-foreground mt-1">vs Fossil CO₂</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
