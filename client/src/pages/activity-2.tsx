import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, RefreshCw, Target, Building2 } from "lucide-react";
import { useState } from "react";

export default function Activity2() {
  const [hoveredComponent, setHoveredComponent] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-cyan-50 dark:bg-cyan-950/30 flex items-center justify-center">
              <Droplets className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Activity 2
              </p>
              <h1 className="text-4xl font-bold text-foreground" data-testid="text-activity-title">
                Wave Energy Conversion System
              </h1>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed" data-testid="text-overview">
            An innovative offshore buoy-based system that converts ocean wave motion directly into 
            fresh water through reverse osmosis desalination for coastal communities.
          </p>
          
          {/* Comprehensive Explanation */}
          <div className="mt-8 p-6 rounded-lg bg-muted/30">
            <p className="text-sm text-foreground leading-relaxed" data-testid="text-comprehensive-explanation">
              This wave energy conversion system harnesses ocean wave motion to power desalination without conventional energy sources. 
              Floating buoys (Oneka Snowflake design) utilize vertical heave motion (1-3 meter waves with 8-12 second frequencies) to 
              drive hydraulic pistons, converting wave kinetic energy directly into 400-800 PSI water pressure. Pressure accumulators 
              smooth flow variability while seawater passes through 60-micron pre-filters followed by reverse osmosis membranes, 
              separating fresh water from concentrated brine. Each buoy produces 10,000 liters of fresh water weekly (enough for ~450 people) 
              with less than 500 ppm total dissolved solids, meeting drinking water standards. The modular design allows scaling by adding 
              more buoys based on demand. Deployed in Canary Islands, North Carolina, and Cape Verde, this technology eliminates 50-60% 
              of traditional desalination energy costs, requires 90% less land than conventional plants, and creates zero greenhouse gas 
              emissions, making it ideal for water-scarce coastal communities and remote islands.
            </p>
          </div>
        </div>

        {/* Block Diagram */}
        <Card className="mb-12" data-testid="card-block-diagram">
          <CardHeader>
            <CardTitle data-testid="text-block-diagram-title">System Block Diagram</CardTitle>
            <CardDescription data-testid="text-block-diagram-description">
              Wave energy capture, hydraulic conversion, and reverse osmosis desalination process
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <svg
              viewBox="0 0 800 850"
              className="w-full h-auto"
              style={{ maxHeight: "850px" }}
            >
              <defs>
                <marker
                  id="arrowhead-2"
                  markerWidth="10"
                  markerHeight="10"
                  refX="9"
                  refY="3"
                  orient="auto"
                >
                  <polygon
                    points="0 0, 10 3, 0 6"
                    className="fill-cyan-600 dark:fill-cyan-400"
                  />
                </marker>
                <filter id="shadow-2" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.1" />
                </filter>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" className="stop-cyan-200 dark:stop-cyan-800" />
                  <stop offset="100%" className="stop-cyan-400 dark:stop-cyan-600" />
                </linearGradient>
              </defs>

              {/* Ocean Waves */}
              <g>
                <text x="400" y="30" className="fill-foreground font-semibold text-sm" textAnchor="middle">
                  OCEAN WAVE ENERGY INPUT
                </text>
                <rect x="50" y="50" width="700" height="100" rx="8" className="fill-cyan-50 dark:fill-cyan-950/30 stroke-cyan-500 stroke-2" filter="url(#shadow-2)" />
                
                <path d="M 100 80 Q 130 70, 160 80 T 220 80 T 280 80 T 340 80 T 400 80 T 460 80 T 520 80 T 580 80 T 640 80 T 700 80" 
                      className="stroke-cyan-600 dark:stroke-cyan-400 stroke-2 fill-none">
                  <animate attributeName="d" 
                    values="M 100 80 Q 130 70, 160 80 T 220 80 T 280 80 T 340 80 T 400 80 T 460 80 T 520 80 T 580 80 T 640 80 T 700 80;
                            M 100 80 Q 130 90, 160 80 T 220 80 T 280 80 T 340 80 T 400 80 T 460 80 T 520 80 T 580 80 T 640 80 T 700 80;
                            M 100 80 Q 130 70, 160 80 T 220 80 T 280 80 T 340 80 T 400 80 T 460 80 T 520 80 T 580 80 T 640 80 T 700 80" 
                    dur="3s" 
                    repeatCount="indefinite" />
                </path>
                
                <text x="400" y="115" className="fill-muted-foreground text-xs" textAnchor="middle">
                  Wave Height: 1-3m  •  Frequency: 8-12s  •  Power Density: 20-50 kW/m
                </text>
                <text x="400" y="135" className="fill-muted-foreground text-xs font-semibold" textAnchor="middle">
                  Vertical & Horizontal Motion Energy
                </text>
              </g>

              {/* Wave Energy Converter */}
              <g>
                <text x="400" y="180" className="fill-foreground font-semibold text-sm" textAnchor="middle">
                  WAVE ENERGY CONVERTER (WEC)
                </text>
                <rect x="50" y="200" width="700" height="180" rx="8" className="fill-card stroke-card-border stroke-2" filter="url(#shadow-2)" />
                
                {/* Floating Buoy */}
                <g
                  data-testid="svg-component-floating-buoy"
                  onMouseEnter={() => setHoveredComponent("buoy")}
                  onMouseLeave={() => setHoveredComponent(null)}
                  className="cursor-pointer transition-opacity"
                  style={{ opacity: hoveredComponent && hoveredComponent !== "buoy" ? 0.5 : 1 }}
                >
                  <ellipse cx="160" cy="270" rx="80" ry="50" className="fill-blue-100 dark:fill-blue-900/40 stroke-blue-500 stroke-2" />
                  <text x="160" y="260" className="fill-foreground font-medium text-xs" textAnchor="middle">Floating Buoy</text>
                  <text x="160" y="275" className="fill-muted-foreground text-xs" textAnchor="middle">Heave Motion</text>
                  <text x="160" y="290" className="fill-muted-foreground text-xs" textAnchor="middle">Oneka Snowflake</text>
                  
                  <line x1="160" y1="320" x2="160" y2="360" className="stroke-blue-500 stroke-2 stroke-dasharray-4-2" />
                  <text x="160" y="355" className="fill-muted-foreground text-xs" textAnchor="middle">Anchor</text>
                </g>

                {/* Hydraulic System */}
                <g
                  data-testid="svg-component-hydraulic-system"
                  onMouseEnter={() => setHoveredComponent("hydraulic")}
                  onMouseLeave={() => setHoveredComponent(null)}
                  className="cursor-pointer transition-opacity"
                  style={{ opacity: hoveredComponent && hoveredComponent !== "hydraulic" ? 0.5 : 1 }}
                >
                  <rect x="320" y="230" width="160" height="110" rx="8" className="fill-orange-50 dark:fill-orange-950/30 stroke-orange-500 stroke-2" />
                  <text x="400" y="255" className="fill-foreground font-medium text-xs" textAnchor="middle">Hydraulic System</text>
                  <text x="400" y="275" className="fill-muted-foreground text-xs" textAnchor="middle">Piston/Cylinder</text>
                  <text x="400" y="290" className="fill-muted-foreground text-xs" textAnchor="middle">Wave Motion → Pressure</text>
                  <text x="400" y="305" className="fill-muted-foreground text-xs font-mono" textAnchor="middle">400-800 PSI</text>
                  <text x="400" y="320" className="fill-muted-foreground text-xs" textAnchor="middle">Pressure Accumulator</text>
                  <text x="400" y="335" className="fill-muted-foreground text-xs" textAnchor="middle">Smooths Variability</text>
                </g>

                {/* Seawater Intake */}
                <g
                  data-testid="svg-component-seawater-intake"
                  onMouseEnter={() => setHoveredComponent("intake")}
                  onMouseLeave={() => setHoveredComponent(null)}
                  className="cursor-pointer transition-opacity"
                  style={{ opacity: hoveredComponent && hoveredComponent !== "intake" ? 0.5 : 1 }}
                >
                  <rect x="550" y="245" width="150" height="80" rx="8" className="fill-teal-50 dark:fill-teal-950/30 stroke-teal-500 stroke-2" />
                  <text x="625" y="270" className="fill-foreground font-medium text-xs" textAnchor="middle">Seawater Intake</text>
                  <text x="625" y="290" className="fill-muted-foreground text-xs" textAnchor="middle">60-micron Filter</text>
                  <text x="625" y="305" className="fill-muted-foreground text-xs" textAnchor="middle">Marine Life Protection</text>
                  <text x="625" y="320" className="fill-muted-foreground text-xs" textAnchor="middle">~35,000 ppm Salinity</text>
                </g>

                {/* Connections */}
                <path d="M 240 270 L 320 270" className="stroke-cyan-600 dark:stroke-cyan-400 stroke-2" markerEnd="url(#arrowhead-2)" />
                <path d="M 480 285 L 550 285" className="stroke-cyan-600 dark:stroke-cyan-400 stroke-2" markerEnd="url(#arrowhead-2)" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
                </path>
              </g>

              {/* Reverse Osmosis */}
              <g>
                <text x="400" y="410" className="fill-foreground font-semibold text-sm" textAnchor="middle">
                  DESALINATION PROCESS
                </text>
                <rect x="50" y="430" width="700" height="150" rx="8" className="fill-card stroke-card-border stroke-2" filter="url(#shadow-2)" />
                
                {/* Pre-filtration */}
                <g
                  data-testid="svg-component-pre-filtration"
                  onMouseEnter={() => setHoveredComponent("prefilter")}
                  onMouseLeave={() => setHoveredComponent(null)}
                  className="cursor-pointer transition-opacity"
                  style={{ opacity: hoveredComponent && hoveredComponent !== "prefilter" ? 0.5 : 1 }}
                >
                  <rect x="80" y="460" width="130" height="90" rx="8" className="fill-slate-50 dark:fill-slate-950/30 stroke-slate-500 stroke-2" />
                  <text x="145" y="485" className="fill-foreground font-medium text-xs" textAnchor="middle">Pre-filtration</text>
                  <text x="145" y="505" className="fill-muted-foreground text-xs" textAnchor="middle">Sediment</text>
                  <text x="145" y="520" className="fill-muted-foreground text-xs" textAnchor="middle">Carbon Filter</text>
                  <text x="145" y="535" className="fill-muted-foreground text-xs" textAnchor="middle">5-60 micron</text>
                </g>

                {/* RO Membranes */}
                <g
                  data-testid="svg-component-ro-membranes"
                  onMouseEnter={() => setHoveredComponent("ro")}
                  onMouseLeave={() => setHoveredComponent(null)}
                  className="cursor-pointer transition-opacity"
                  style={{ opacity: hoveredComponent && hoveredComponent !== "ro" ? 0.5 : 1 }}
                >
                  <rect x="260" y="460" width="160" height="90" rx="8" className="fill-blue-50 dark:fill-blue-950/30 stroke-blue-500 stroke-2" />
                  <text x="340" y="485" className="fill-foreground font-medium text-xs" textAnchor="middle">RO Membranes</text>
                  <text x="340" y="505" className="fill-muted-foreground text-xs" textAnchor="middle">Reverse Osmosis</text>
                  <text x="340" y="520" className="fill-muted-foreground text-xs font-mono" textAnchor="middle">400-800 PSI</text>
                  <text x="340" y="535" className="fill-muted-foreground text-xs" textAnchor="middle">Handles Variability</text>
                </g>

                {/* Output Split */}
                <g>
                  <rect x="470" y="460" width="120" height="40" rx="8" className="fill-green-50 dark:fill-green-950/30 stroke-green-500 stroke-2" />
                  <text x="530" y="485" className="fill-foreground font-medium text-xs" textAnchor="middle">Fresh Water</text>
                  <text x="530" y="497" className="fill-muted-foreground text-xs font-mono" textAnchor="middle">&lt;500 ppm TDS</text>
                  
                  <rect x="470" y="510" width="120" height="40" rx="8" className="fill-amber-50 dark:fill-amber-950/30 stroke-amber-500 stroke-2" />
                  <text x="530" y="532" className="fill-foreground font-medium text-xs" textAnchor="middle">Brine Reject</text>
                  <text x="530" y="545" className="fill-muted-foreground text-xs" textAnchor="middle">~50k ppm</text>
                </g>

                {/* Storage */}
                <g
                  data-testid="svg-component-storage-tank"
                  onMouseEnter={() => setHoveredComponent("storage")}
                  onMouseLeave={() => setHoveredComponent(null)}
                  className="cursor-pointer transition-opacity"
                  style={{ opacity: hoveredComponent && hoveredComponent !== "storage" ? 0.5 : 1 }}
                >
                  <rect x="630" y="460" width="120" height="90" rx="8" className="fill-cyan-50 dark:fill-cyan-950/30 stroke-cyan-500 stroke-2" />
                  <text x="690" y="485" className="fill-foreground font-medium text-xs" textAnchor="middle">Storage Tank</text>
                  <text x="690" y="505" className="fill-muted-foreground text-xs" textAnchor="middle">Onshore Pipe</text>
                  <text x="690" y="520" className="fill-muted-foreground text-xs font-mono" textAnchor="middle">10,000 L/week</text>
                  <text x="690" y="535" className="fill-muted-foreground text-xs" textAnchor="middle">~450 people</text>
                </g>

                {/* Connections */}
                <path d="M 400 380 L 400 430" className="stroke-cyan-600 dark:stroke-cyan-400 stroke-2" markerEnd="url(#arrowhead-2)" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
                </path>
                <path d="M 210 505 L 260 505" className="stroke-cyan-600 dark:stroke-cyan-400 stroke-2" markerEnd="url(#arrowhead-2)" />
                <path d="M 420 505 L 470 480" className="stroke-green-600 dark:stroke-green-400 stroke-2" markerEnd="url(#arrowhead-2)" />
                <path d="M 420 505 L 470 530" className="stroke-amber-600 dark:stroke-amber-400 stroke-2" markerEnd="url(#arrowhead-2)" />
                <path d="M 590 480 L 630 480" className="stroke-cyan-600 dark:stroke-cyan-400 stroke-2" markerEnd="url(#arrowhead-2)" />
                <path d="M 530 550 L 530 600" className="stroke-amber-600 dark:stroke-amber-400 stroke-2 stroke-dasharray-4-2" />
                <text x="560" y="580" className="fill-muted-foreground text-xs">Offshore</text>
                <text x="560" y="595" className="fill-muted-foreground text-xs">Dilution</text>
              </g>

              {/* Distribution */}
              <g>
                <text x="400" y="630" className="fill-foreground font-semibold text-sm" textAnchor="middle">
                  DISTRIBUTION & END USE
                </text>
                <rect x="150" y="650" width="500" height="150" rx="8" className="fill-card stroke-card-border stroke-2" filter="url(#shadow-2)" />
                
                <text x="400" y="680" className="fill-foreground font-medium text-xs" textAnchor="middle">Coastal Community Water Supply</text>
                
                <text x="250" y="710" className="fill-muted-foreground text-xs">• Drinking Water (WHO Standards)</text>
                <text x="250" y="730" className="fill-muted-foreground text-xs">• Agricultural Irrigation</text>
                <text x="250" y="750" className="fill-muted-foreground text-xs">• Industrial Processing</text>
                
                <text x="480" y="710" className="fill-muted-foreground text-xs">• Emergency/Disaster Relief</text>
                <text x="480" y="730" className="fill-muted-foreground text-xs">• Remote Island Communities</text>
                <text x="480" y="750" className="fill-muted-foreground text-xs">• Tourist Destinations</text>
                
                <text x="400" y="780" className="fill-cyan-600 dark:fill-cyan-400 font-mono text-sm font-semibold" textAnchor="middle">
                  Cost: &lt;$2/m³  •  60% Lower Than Conventional  •  Zero Emissions
                </text>
              </g>
              <path d="M 690 550 L 690 600 L 400 600 L 400 650" className="stroke-cyan-600 dark:stroke-cyan-400 stroke-2" markerEnd="url(#arrowhead-2)" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
              </path>

              {/* Legend */}
              <g>
                <text x="50" y="830" className="fill-muted-foreground text-xs font-semibold">System Flow:</text>
                <line x1="150" y1="825" x2="200" y2="825" className="stroke-cyan-600 dark:stroke-cyan-400 stroke-2" strokeDasharray="5,5" />
                <text x="210" y="830" className="fill-muted-foreground text-xs">Water Flow</text>
                
                <line x1="320" y1="825" x2="370" y2="825" className="stroke-cyan-600 dark:stroke-cyan-400 stroke-2" />
                <text x="380" y="830" className="fill-muted-foreground text-xs">Pressurized Flow</text>
              </g>
            </svg>
          </CardContent>
        </Card>

        {/* System Explanation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card data-testid="card-energy-source">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-cyan-50 dark:bg-cyan-950/30 flex items-center justify-center mb-4">
                <Droplets className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
              </div>
              <CardTitle className="text-lg" data-testid="text-energy-source-title">Energy Source</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-energy-source-explanation">
                Ocean wave kinetic energy from vertical and horizontal motion. Wave heights of 1-3 meters 
                with 8-12 second frequencies provide power densities of 20-50 kW per meter of wave crest. 
                This continuous, predictable renewable resource is available 24/7 in coastal regions.
              </p>
            </CardContent>
          </Card>

          <Card data-testid="card-conversion">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-orange-50 dark:bg-orange-950/30 flex items-center justify-center mb-4">
                <RefreshCw className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <CardTitle className="text-lg" data-testid="text-conversion-title">Conversion Process</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-conversion-explanation">
                Floating buoys (Oneka Snowflake design) use heave motion to drive hydraulic pistons, 
                converting wave energy directly to 400-800 PSI water pressure. Pressure accumulators smooth 
                flow variability. Seawater passes through 60-micron filters then RO membranes, separating 
                fresh water from concentrated brine without electricity.
              </p>
            </CardContent>
          </Card>

          <Card data-testid="card-output">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-green-50 dark:bg-green-950/30 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle className="text-lg" data-testid="text-output-title">Output & Utilization</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-output-explanation">
                Produces 10,000 liters of fresh water per buoy weekly (enough for ~450 people) with 
                less than 500 ppm total dissolved solids. Water piped to shore for storage and distribution. 
                Brine reject (50,000 ppm) dilutes offshore naturally. Modular design allows scaling by 
                adding more buoys based on demand.
              </p>
            </CardContent>
          </Card>

          <Card data-testid="card-applications">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-blue-50 dark:blue-950/30 flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle className="text-lg" data-testid="text-applications-title">Real-World Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-applications-explanation">
                Deployed in Canary Islands (Ocean Oasis), North Carolina (NREL testing), and Cape Verde. 
                Ideal for water-scarce coastal communities, remote islands, disaster relief, and tourist 
                destinations. Eliminates 50-60% of desalination energy costs, requires 90% less land than 
                conventional plants, and creates zero greenhouse gas emissions.
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
              <div className="text-center p-4 rounded-lg bg-muted" data-testid="spec-water-output">
                <p className="text-2xl font-bold font-mono text-foreground">10,000</p>
                <p className="text-xs text-muted-foreground mt-1">Liters/Week/Buoy</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted" data-testid="spec-water-quality">
                <p className="text-2xl font-bold font-mono text-foreground">&lt;500</p>
                <p className="text-xs text-muted-foreground mt-1">PPM TDS Output</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted" data-testid="spec-cost">
                <p className="text-2xl font-bold font-mono text-foreground">&lt;$2</p>
                <p className="text-xs text-muted-foreground mt-1">Cost per m³</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted" data-testid="spec-cost-savings">
                <p className="text-2xl font-bold font-mono text-foreground">60%</p>
                <p className="text-xs text-muted-foreground mt-1">Energy Cost Savings</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
