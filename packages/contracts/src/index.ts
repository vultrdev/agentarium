export type AgentRole = "Architect" | "Builder" | "Critic";
export type ArtifactStatus = "draft" | "in_review" | "approved";
export type ApprovalStatus = "pending" | "approved" | "rejected";

export interface AgentCard {
  id: string;
  name: string;
  role: AgentRole;
  state: "idle" | "active" | "blocked";
}

export interface ArtifactCard {
  id: string;
  title: string;
  kind: "spec" | "plan" | "patch";
  status: ArtifactStatus;
  ownerAgentId: string;
}

export interface ApprovalCard {
  id: string;
  title: string;
  summary: string;
  status: ApprovalStatus;
}

export interface SessionSnapshot {
  id: string;
  room: "forge";
  task: string;
  agents: AgentCard[];
  artifact?: ArtifactCard;
  approval?: ApprovalCard;
}

export const forgeDemoSession: SessionSnapshot = {
  id: "forge-demo-001",
  room: "forge",
  task: "Bootstrap the Agentarium Phase 0 backbone.",
  agents: [
    { id: "architect-1", name: "Argus", role: "Architect", state: "active" },
    { id: "builder-1", name: "Luma", role: "Builder", state: "active" },
    { id: "critic-1", name: "Kite", role: "Critic", state: "active" }
  ],
  artifact: {
    id: "artifact-1",
    title: "Forge Phase 0 Backbone",
    kind: "spec",
    status: "in_review",
    ownerAgentId: "builder-1"
  },
  approval: {
    id: "approval-1",
    title: "Approve Phase 0 skeleton",
    summary: "Accept the minimal world-state + viewport scaffold so runtime integration can start.",
    status: "pending"
  }
};

export function getActiveAgents(session: SessionSnapshot): AgentCard[] {
  return session.agents.filter((agent) => agent.state === "active");
}

export function getLatestArtifact(session: SessionSnapshot): ArtifactCard | undefined {
  return session.artifact;
}

export function getOpenApproval(session: SessionSnapshot): ApprovalCard | undefined {
  return session.approval?.status === "pending" ? session.approval : undefined;
}
