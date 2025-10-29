import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, RefreshCw, Target, Building2 } from "lucide-react";
import { useState } from "react";

export default function Activity1() {
  const [hoveredComponent, setHoveredComponent] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center">
              <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Activity 1
              </p>
              <h1 className="text-4xl font-bold text-foreground" data-testid="text-activity-title">
                Hybrid Biogas-Wind Energy System
              </h1>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed" data-testid="text-overview">
            A sustainable energy solution for rural health clinics combining biogas and wind power 
            with battery storage for 24/7 reliable electricity supply.
          </p>
          
          {/* Comprehensive Explanation */}
          <div className="mt-8 p-6 rounded-lg bg-muted/30">
            <p className="text-sm text-foreground leading-relaxed" data-testid="text-comprehensive-explanation">
              This hybrid renewable energy system integrates wind turbines (5-206 kW) and biogas generators (10-420 kW) 
              to provide reliable electricity for rural health clinics. Wind turbines capture kinetic energy from wind, 
              while biogas generators convert organic livestock waste through anaerobic digestion (20-40 days retention) 
              into methane fuel (55-65% concentration). Both sources feed into an AC bus, with AC/DC converters (92-96% efficiency) 
              managing power conditioning and battery charging. Battery banks (200-400V, 36-633 Ah) provide 4-12 hours backup 
              autonomy, ensuring continuous operation during low wind or maintenance periods. The system delivers 60-260 kWh 
              daily with 20-65 kW peak capacity, powering critical medical equipment, vaccine refrigeration, lighting, HVAC, 
              and water systems with 99.9% reliability. This solution is ideal for off-grid rural healthcare in developing 
              regions, reducing diesel dependency by 60-80% while providing sustainable waste management for agricultural 
              communities with an 8-15 year payback period.
            </p>
          </div>
        </div>

        {/* Block Diagram */}
        <Card className="mb-12" data-testid="card-block-diagram">
          <CardHeader>
            <CardTitle data-testid="text-block-diagram-title">System Block Diagram</CardTitle>
            <CardDescription data-testid="text-block-diagram-description">
              Interactive architecture showing energy generation, power conditioning, storage, and load distribution
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <svg
              viewBox="0 0 800 900"
              className="w-full h-auto"
              style={{ maxHeight: "900px" }}
            >
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="10"
                  refX="9"
                  refY="3"
                  orient="auto"
                >
                  <polygon
                    points="0 0, 10 3, 0 6"
                    className="fill-primary"
                  />
                </marker>
                <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.1" />
                </filter>
              </defs>

              {/* Energy Generation Sources */}
              <g>
                <text x="400" y="30" className="fill-foreground font-semibold text-sm" textAnchor="middle">
                  ENERGY GENERATION SOURCES
                </text>
                <rect x="50" y="50" width="700" height="160" rx="8" className="fill-card stroke-card-border stroke-2" filter="url(#shadow)" />
                
                {/* Wind Turbine */}
                <g
                  data-testid="svg-component-wind-turbine"
                  onMouseEnter={() => setHoveredComponent("wind")}
                  onMouseLeave={() => setHoveredComponent(null)}
                  className="cursor-pointer transition-opacity"
                  style={{ opacity: hoveredComponent && hoveredComponent !== "wind" ? 0.5 : 1 }}
                >
                  <rect x="80" y="80" width="150" height="100" rx="8" className="fill-blue-50 dark:fill-blue-950/30 stroke-blue-500 stroke-2" />
                  <text x="155" y="110" className="fill-foreground font-medium text-xs" textAnchor="middle">Wind Turbine</text>
                  <text x="155" y="130" className="fill-muted-foreground text-xs font-mono" textAnchor="middle">5-206 kW</text>
                  <text x="155" y="150" className="fill-muted-foreground text-xs" textAnchor="middle">AC Output</text>
                  <text x="155" y="165" className="fill-muted-foreground text-xs" textAnchor="middle">Variable Source</text>
                </g>

                {/* Biogas System */}
                <g
                  data-testid="svg-component-biogas-system"
                  onMouseEnter={() => setHoveredComponent("biogas")}
                  onMouseLeave={() => setHoveredComponent(null)}
                  className="cursor-pointer transition-opacity"
                  style={{ opacity: hoveredComponent && hoveredComponent !== "biogas" ? 0.5 : 1 }}
                >
                  <rect x="450" y="80" width="150" height="50" rx="8" className="fill-green-50 dark:fill-green-950/30 stroke-green-500 stroke-2" />
                  <text x="525" y="100" className="fill-foreground font-medium text-xs" textAnchor="middle">Biogas Plant</text>
                  <text x="525" y="115" className="fill-muted-foreground text-xs" textAnchor="middle">Anaerobic Digester</text>
                  
                  <rect x="450" y="145" width="150" height="50" rx="8" className="fill-green-50 dark:fill-green-950/30 stroke-green-500 stroke-2" />
                  <text x="525" y="165" className="fill-foreground font-medium text-xs" textAnchor="middle">Biogas Generator</text>
                  <text x="525" y="180" className="fill-muted-foreground text-xs font-mono" textAnchor="middle">10-420 kW</text>
                </g>

                {/* Connections from sources */}
                <path d="M 155 180 L 155 240" className="stroke-primary stroke-2" markerEnd="url(#arrowhead)" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
                </path>
                <path d="M 525 130 L 525 145" className="stroke-primary stroke-2" markerEnd="url(#arrowhead)" />
                <path d="M 525 195 L 525 240" className="stroke-primary stroke-2" markerEnd="url(#arrowhead)" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
                </path>
              </g>

              {/* Power Conditioning */}
              <g>
                <text x="400" y="260" className="fill-foreground font-semibold text-sm" textAnchor="middle">
                  POWER CONDITIONING
                </text>
                <rect x="50" y="280" width="700" height="140" rx="8" className="fill-card stroke-card-border stroke-2" filter="url(#shadow)" />
                
                {/* AC Bus */}
                <g
                  data-testid="svg-component-ac-bus"
                  onMouseEnter={() => setHoveredComponent("acbus")}
                  onMouseLeave={() => setHoveredComponent(null)}
                  className="cursor-pointer transition-opacity"
                  style={{ opacity: hoveredComponent && hoveredComponent !== "acbus" ? 0.5 : 1 }}
                >
                  <rect x="80" y="310" width="120" height="80" rx="8" className="fill-purple-50 dark:fill-purple-950/30 stroke-purple-500 stroke-2" />
                  <text x="140" y="340" className="fill-foreground font-medium text-xs" textAnchor="middle">AC Bus</text>
                  <text x="140" y="360" className="fill-muted-foreground text-xs" textAnchor="middle">Power</text>
                  <text x="140" y="375" className="fill-muted-foreground text-xs" textAnchor="middle">Distribution</text>
                </g>

                {/* Converter */}
                <g
                  data-testid="svg-component-converter"
                  onMouseEnter={() => setHoveredComponent("converter")}
                  onMouseLeave={() => setHoveredComponent(null)}
                  className="cursor-pointer transition-opacity"
                  style={{ opacity: hoveredComponent && hoveredComponent !== "converter" ? 0.5 : 1 }}
                >
                  <rect x="330" y="310" width="140" height="80" rx="8" className="fill-amber-50 dark:fill-amber-950/30 stroke-amber-500 stroke-2" />
                  <text x="400" y="335" className="fill-foreground font-medium text-xs" textAnchor="middle">Converter/Inverter</text>
                  <text x="400" y="355" className="fill-muted-foreground text-xs font-mono" textAnchor="middle">10-170 kW</text>
                  <text x="400" y="370" className="fill-muted-foreground text-xs" textAnchor="middle">AC ⟷ DC</text>
                  <text x="400" y="385" className="fill-muted-foreground text-xs" textAnchor="middle">92-96% Eff.</text>
                </g>

                {/* DC Bus */}
                <g
                  data-testid="svg-component-dc-bus"
                  onMouseEnter={() => setHoveredComponent("dcbus")}
                  onMouseLeave={() => setHoveredComponent(null)}
                  className="cursor-pointer transition-opacity"
                  style={{ opacity: hoveredComponent && hoveredComponent !== "dcbus" ? 0.5 : 1 }}
                >
                  <rect x="600" y="310" width="120" height="80" rx="8" className="fill-purple-50 dark:fill-purple-950/30 stroke-purple-500 stroke-2" />
                  <text x="660" y="345" className="fill-foreground font-medium text-xs" textAnchor="middle">DC Bus</text>
                  <text x="660" y="365" className="fill-muted-foreground text-xs" textAnchor="middle">Battery</text>
                  <text x="660" y="380" className="fill-muted-foreground text-xs" textAnchor="middle">Interface</text>
                </g>

                {/* Connections */}
                <path d="M 200 350 L 330 350" className="stroke-primary stroke-2" markerEnd="url(#arrowhead)" />
                <path d="M 470 350 L 600 350" className="stroke-primary stroke-2" markerEnd="url(#arrowhead)" />
              </g>

              {/* Battery Storage */}
              <g
                data-testid="svg-component-battery-storage"
                onMouseEnter={() => setHoveredComponent("battery")}
                onMouseLeave={() => setHoveredComponent(null)}
                className="cursor-pointer transition-opacity"
                style={{ opacity: hoveredComponent && hoveredComponent !== "battery" ? 0.5 : 1 }}
              >
                <rect x="550" y="450" width="200" height="100" rx="8" className="fill-cyan-50 dark:fill-cyan-950/30 stroke-cyan-500 stroke-2" filter="url(#shadow)" />
                <text x="650" y="475" className="fill-foreground font-medium text-sm" textAnchor="middle">Battery Storage</text>
                <text x="650" y="495" className="fill-muted-foreground text-xs" textAnchor="middle">Lead Acid / Lithium-ion</text>
                <text x="650" y="510" className="fill-muted-foreground text-xs font-mono" textAnchor="middle">36-633 Ah</text>
                <text x="650" y="525" className="fill-muted-foreground text-xs font-mono" textAnchor="middle">200-400V DC</text>
                <text x="650" y="540" className="fill-muted-foreground text-xs" textAnchor="middle">4-12h Autonomy</text>
              </g>
              <path d="M 660 390 L 660 450" className="stroke-primary stroke-2" markerEnd="url(#arrowhead)" />

              {/* Load */}
              <g>
                <text x="400" y="590" className="fill-foreground font-semibold text-sm" textAnchor="middle">
                  CLINIC EQUIPMENT LOAD
                </text>
                <rect x="50" y="610" width="700" height="180" rx="8" className="fill-card stroke-card-border stroke-2" filter="url(#shadow)" />
                
                <g
                  data-testid="svg-component-clinic-load"
                  onMouseEnter={() => setHoveredComponent("load")}
                  onMouseLeave={() => setHoveredComponent(null)}
                  className="cursor-pointer transition-opacity"
                  style={{ opacity: hoveredComponent && hoveredComponent !== "load" ? 0.5 : 1 }}
                >
                  <text x="400" y="640" className="fill-foreground font-medium text-xs" textAnchor="middle">Critical & Non-Critical Loads</text>
                  
                  <text x="200" y="665" className="fill-muted-foreground text-xs">• Medical Equipment (X-ray, Ultrasound, Ventilators)</text>
                  <text x="200" y="685" className="fill-muted-foreground text-xs">• Vaccine Refrigeration & Medicine Storage</text>
                  <text x="200" y="705" className="fill-muted-foreground text-xs">• Surgical Equipment & Sterilization (Autoclaves)</text>
                  <text x="200" y="725" className="fill-muted-foreground text-xs">• Emergency & General Lighting (LED)</text>
                  
                  <text x="480" y="665" className="fill-muted-foreground text-xs">• HVAC Systems & Climate Control</text>
                  <text x="480" y="685" className="fill-muted-foreground text-xs">• IT/Communications Equipment</text>
                  <text x="480" y="705" className="fill-muted-foreground text-xs">• Water Pumps & Distribution</text>
                  
                  <text x="400" y="750" className="fill-primary font-mono text-sm font-semibold" textAnchor="middle">
                    Daily Load: 60-260 kWh/day  •  Peak Demand: 20-65 kW
                  </text>
                  <text x="400" y="770" className="fill-muted-foreground text-xs" textAnchor="middle">
                    Load Factor: 30-50%
                  </text>
                </g>
              </g>
              <path d="M 140 390 L 140 500 L 350 500 L 350 610" className="stroke-primary stroke-2" markerEnd="url(#arrowhead)" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
              </path>

              {/* Control System */}
              <g>
                <text x="400" y="820" className="fill-foreground font-semibold text-sm" textAnchor="middle">
                  CONTROL & MONITORING SYSTEM
                </text>
                <rect x="150" y="840" width="500" height="40" rx="8" className="fill-slate-50 dark:fill-slate-950/30 stroke-slate-500 stroke-2" filter="url(#shadow)" />
                <text x="400" y="865" className="fill-muted-foreground text-xs" textAnchor="middle">
                  Energy Management • Battery Controller • Protection Systems • SCADA/Monitoring
                </text>
              </g>
            </svg>
          </CardContent>
        </Card>

        {/* System Explanation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card data-testid="card-energy-source">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle className="text-lg" data-testid="text-energy-source-title">Energy Source</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-energy-source-explanation">
                Combines two renewable sources: wind turbines (5-206 kW) capture kinetic wind energy, 
                while biogas generators (10-420 kW) convert organic waste from livestock into methane fuel. 
                This dual approach ensures continuous power availability regardless of weather conditions.
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
                Wind turbines generate AC electricity directly. Biogas undergoes anaerobic digestion 
                (20-40 days retention) producing 55-65% methane, which powers modified IC engines. 
                AC/DC converters (92-96% efficiency) synchronize all sources and manage battery charging through intelligent power conditioning.
              </p>
            </CardContent>
          </Card>

          <Card data-testid="card-output">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-cyan-50 dark:bg-cyan-950/30 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
              </div>
              <CardTitle className="text-lg" data-testid="text-output-title">Output & Utilization</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-output-explanation">
                Provides 60-260 kWh daily for rural health clinics with 20-65 kW peak capacity. 
                Battery banks (200-400V, 36-633 Ah) offer 4-12 hours backup. Powers critical medical equipment, 
                vaccine refrigeration, lighting, HVAC, and water systems with 99.9% reliability.
              </p>
            </CardContent>
          </Card>

          <Card data-testid="card-applications">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-green-50 dark:bg-green-950/30 flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle className="text-lg" data-testid="text-applications-title">Real-World Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-applications-explanation">
                Ideal for off-grid rural healthcare in developing regions (Jordan refugee camps, Indian villages, 
                African communities). Reduces diesel dependency by 60-80%, cuts CO₂ emissions, and provides waste management 
                solution for agricultural communities with 8-15 year payback period.
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
              <div className="text-center p-4 rounded-lg bg-muted" data-testid="spec-wind-turbine">
                <p className="text-2xl font-bold font-mono text-foreground">5-206</p>
                <p className="text-xs text-muted-foreground mt-1">Wind Turbine (kW)</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted" data-testid="spec-biogas-gen">
                <p className="text-2xl font-bold font-mono text-foreground">10-420</p>
                <p className="text-xs text-muted-foreground mt-1">Biogas Gen (kW)</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted" data-testid="spec-converter-efficiency">
                <p className="text-2xl font-bold font-mono text-foreground">92-96%</p>
                <p className="text-xs text-muted-foreground mt-1">Converter Efficiency</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted" data-testid="spec-battery-autonomy">
                <p className="text-2xl font-bold font-mono text-foreground">4-12h</p>
                <p className="text-xs text-muted-foreground mt-1">Battery Autonomy</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
