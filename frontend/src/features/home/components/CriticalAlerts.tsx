import React from "react";
import { TriangleAlert } from "lucide-react";

type Severity = "high" | "medium" | "low";

interface AlertCardProps {
  alertType: string;
  severity: Severity;
  description: string;
  source: string;
  action: string;
  alertTime: string;
}

const severityColors: Record<Severity, string> = {
  high: "#FB2C364D",
  medium: "#F59E0B4D",
  low: "#3B82F64D",
};

const severityIconColors: Record<Severity, string> = {
  high: "#FB2C36",
  medium: "#f59e0b",
  low: "#878787",
};

const AlertCard: React.FC<AlertCardProps> = ({
  alertType,
  severity,
  description,
  source,
  action,
  alertTime,
}) => {
  const color = severityColors[severity];
  const iconColor = severityIconColors[severity];

  return (
    <div className="relative rounded-lg bg-[#2f2f2fc8] p-4 overflow-hidden border border-gray-800/50 shrink-0">
      {/* Top-left corner color accent */}
      <div
        className="absolute top-0 left-0 w-20 h-20 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 0% 0%, ${color}55 0%, ${color}30 30%, transparent 70%)`,
        }}
      />
      <div
        className="absolute -top-px -left-px w-12 h-[3px] rounded-tr-full"
        style={{ background: color }}
      />
      <div
        className="absolute -top-px -left-px h-12 w-[3px] rounded-bl-full"
        style={{ background: color }}
      />

      {/* Bottom-right corner color accent */}
      <div
        className="absolute bottom-0 right-0 w-20 h-20 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 100% 100%, ${color}55 0%, ${color}30 30%, transparent 70%)`,
        }}
      />
      <div
        className="absolute -bottom-px -right-px w-12 h-[3px] rounded-tl-full"
        style={{ background: color }}
      />
      <div
        className="absolute -bottom-px -right-px h-12 w-[3px] rounded-tr-full"
        style={{ background: color }}
      />

      {/* Header */}
      <div className="flex items-center justify-between mb-1.5 relative z-10">
        <span className="font-sf text-white">Alert: {alertType}</span>
        <TriangleAlert size={24} color={iconColor} />
      </div>

      {/* Description */}
      <p className="text-sm text-[#8F8F8F] italic mb-2 relative z-10">
        {description}
      </p>

      {/* Source */}
      <p className="text-sm text-[#8F8F8F] mb-0.5 relative z-10">
        <span className="text-gray-500">Source: </span>
        {source}
      </p>

      {/* Action */}
      <p className="text-sm text-[#8F8F8F] relative z-10">
        <span className="text-gray-500">Action: </span>
        <span className="font-medium">{action}</span>
      </p>

      {/* Timestamp */}
      <div className="flex justify-end relative z-10">
        <span className="text-gray-500">{alertTime}</span>
      </div>
    </div>
  );
};

const sampleAlerts: AlertCardProps[] = [
  {
    alertType: "Decoy",
    severity: "high",
    description: '"SQL_Backup" Tripped!',
    source: "PC-ADMIN 04",
    action: "INSTANT QUARANTINE",
    alertTime: "10:31 AM",
  },
  {
    alertType: "Lateral Move",
    severity: "high",
    description: "Unauthorized RDP session detected",
    source: "SRV-DB-02",
    action: "SESSION TERMINATED",
    alertTime: "10:28 AM",
  },
  {
    alertType: "Credential Theft",
    severity: "medium",
    description: "Mimikatz signature found in memory",
    source: "WS-FINANCE-07",
    action: "PROCESS KILLED",
    alertTime: "10:15 AM",
  },
  {
    alertType: "Port Scan",
    severity: "low",
    description: "Sequential port probing on subnet",
    source: "NET-GW-01",
    action: "IP BLOCKED",
    alertTime: "9:58 AM",
  },
  {
    alertType: "Exfiltration",
    severity: "high",
    description: "Large data upload to unknown endpoint",
    source: "PC-DEV-12",
    action: "CONNECTION SEVERED",
    alertTime: "9:42 AM",
  },
  {
    alertType: "Privilege Escalation",
    severity: "medium",
    description: "UAC bypass attempt detected",
    source: "WS-HR-03",
    action: "ACCESS REVOKED",
    alertTime: "9:30 AM",
  },
];

const CriticalAlerts = () => {
  return (
    <div>
      <span className="text-xl font-sf font-bold">Critical Alerts</span>

      <div className="mt-4 p-2 flex flex-col gap-y-4 overflow-y-auto h-[380px] custom-scrollbar">
        {sampleAlerts.map((alert, index) => (
          <AlertCard key={index} {...alert} />
        ))}
      </div>
    </div>
  );
};

export default CriticalAlerts;
