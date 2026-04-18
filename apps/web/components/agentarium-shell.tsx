import { forgeDemoSession, getActiveAgents, getLatestArtifact, getOpenApproval } from "@agentarium/contracts";
import { ForgeViewport } from "./forge-viewport";
import styles from "./agentarium-shell.module.css";

export function AgentariumShell() {
  const agents = getActiveAgents(forgeDemoSession);
  const artifact = getLatestArtifact(forgeDemoSession);
  const approval = getOpenApproval(forgeDemoSession);

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Phase 0 bootstrap</p>
          <h1>Forge the world before decorating it.</h1>
          <p className={styles.lead}>
            This starter shell wires the first visible Agentarium loop: a task enters Forge, agents activate,
            an artifact appears, critique lands, and approval waits for the human.
          </p>
          <div className={styles.stats}>
            <Stat label="Visible agents" value={String(agents.length)} />
            <Stat label="Artifact state" value={artifact?.status ?? "none"} />
            <Stat label="Approval status" value={approval?.status ?? "none"} />
          </div>
        </div>
        <div className={styles.viewportWrap}>
          <ForgeViewport />
        </div>
      </section>

      <section className={styles.grid}>
        <Panel title="Active cast" eyebrow="Roles">
          <ul className={styles.list}>
            {agents.map((agent) => (
              <li key={agent.id}>
                <strong>{agent.name}</strong>
                <span>{agent.role}</span>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel title="Latest artifact" eyebrow="Output">
          {artifact ? (
            <div className={styles.stack}>
              <strong>{artifact.title}</strong>
              <span>Status: {artifact.status}</span>
              <span>Kind: {artifact.kind}</span>
              <span>Owner: {artifact.ownerAgentId}</span>
            </div>
          ) : (
            <span>No artifact yet.</span>
          )}
        </Panel>

        <Panel title="Pending approval" eyebrow="Human-in-the-loop">
          {approval ? (
            <div className={styles.stack}>
              <strong>{approval.title}</strong>
              <span>Status: {approval.status}</span>
              <span>{approval.summary}</span>
            </div>
          ) : (
            <span>No approval needed.</span>
          )}
        </Panel>
      </section>
    </main>
  );
}

function Panel({ title, eyebrow, children }: { title: string; eyebrow: string; children: React.ReactNode }) {
  return (
    <article className={styles.panel}>
      <p className={styles.panelEyebrow}>{eyebrow}</p>
      <h2>{title}</h2>
      {children}
    </article>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className={styles.stat}>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
