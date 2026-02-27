import { useState, useEffect, useRef } from "react";

// Minimal scroll reveal hook
function useScrollReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export default function App() {
  return (
    <div style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "#1a1a1a", background: "#fff" }}>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      />

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(255,255,255,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid #e8e8e8" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 15, fontWeight: 700, letterSpacing: "0.05em" }}>VISIQ Academy</span>
          <a href="#cta" style={{ fontSize: 13, fontWeight: 500, color: "#fff", background: "#1a1a1a", padding: "8px 20px", borderRadius: 4, textDecoration: "none", letterSpacing: "0.03em" }}>
            無料体験会
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ paddingTop: 160, paddingBottom: 140, textAlign: "center", background: "#fff" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 24px" }}>
          <Reveal>
            <p style={{ fontSize: 12, letterSpacing: "0.18em", color: "#888", marginBottom: 32, fontWeight: 400 }}>VISIQ ACADEMY</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 style={{ fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 700, lineHeight: 1.5, marginBottom: 28, letterSpacing: "0.01em" }}>
              学力の前に、<br />思考の基礎を。
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p style={{ fontSize: 15, color: "#555", lineHeight: 1.9, marginBottom: 20, fontWeight: 300 }}>
              守られる子どもから、自ら守れる子どもへ。
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p style={{ fontSize: 14, color: "#777", lineHeight: 1.9, fontWeight: 300 }}>
              AI時代に本当に必要なのは、<br />点数ではなく「知的自己防衛力」です。
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div style={{ marginTop: 52 }}>
              <a href="#cta" style={{ display: "inline-block", background: "#1a1a1a", color: "#fff", padding: "16px 40px", fontSize: 14, fontWeight: 500, letterSpacing: "0.06em", textDecoration: "none", borderRadius: 4 }}>
                無料体験会に申し込む
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROBLEM */}
      <section style={{ background: "#f7f7f5", padding: "100px 24px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <Reveal>
            <p style={{ fontSize: 11, letterSpacing: "0.16em", color: "#aaa", marginBottom: 40, fontWeight: 500 }}>CHALLENGE</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 style={{ fontSize: "clamp(20px, 3.5vw, 28px)", fontWeight: 700, lineHeight: 1.7, marginBottom: 36 }}>
              スマートフォンを持たせる、そのとき。
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p style={{ fontSize: 15, color: "#555", lineHeight: 2, marginBottom: 40, fontWeight: 300 }}>
              いずれ、どのご家庭でもお子さまにスマートフォンを持たせる時期が訪れます。<br />保護者の皆さまが最も不安に感じるのは、次のようなことではないでしょうか。
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 40px", display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                "間違った情報に影響されないか",
                "SNSトラブルに巻き込まれないか",
                "感情に振り回されてしまわないか",
                "極端な思想や誤情報を信じてしまわないか",
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14, fontSize: 14, color: "#444", lineHeight: 1.8 }}>
                  <span style={{ width: 20, height: 20, borderRadius: "50%", background: "#e0e0e0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "#888", flexShrink: 0, marginTop: 2 }}>{i + 1}</span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.25}>
            <p style={{ fontSize: 15, color: "#555", lineHeight: 2, fontWeight: 300 }}>
              現代の情報空間には、誇張・印象操作・フェイク動画などが無数に存在します。それらの多くは、論理よりも「感情」に訴えかける構造を持っています。<br /><br />
              情報を遮断することは、現実的ではありません。だからこそVISIQ Academyは、<strong style={{ fontWeight: 600, color: "#1a1a1a" }}>情報を分解できる力を育てる教育</strong>を行います。
            </p>
          </Reveal>
        </div>
      </section>

      {/* KEY CONCEPT — 知的自己防衛力 */}
      <section style={{ background: "#1a1a1a", padding: "100px 24px", color: "#fff" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <Reveal>
            <p style={{ fontSize: 11, letterSpacing: "0.16em", color: "#666", marginBottom: 40, fontWeight: 500 }}>CORE CONCEPT</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 style={{ fontSize: "clamp(22px, 4vw, 34px)", fontWeight: 700, lineHeight: 1.6, marginBottom: 20 }}>
              知的自己防衛力とは
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p style={{ fontSize: 15, color: "#aaa", lineHeight: 2, marginBottom: 48, fontWeight: 300 }}>
              知的自己防衛力とは、ただ情報に強くなることではありません。<br />自分の内側から判断する力を育てることです。
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                "情報をそのまま信じない力",
                "一度立ち止まる力",
                "根拠を確認する力",
                "他の視点を探す力",
                "自分の感情と切り分けて考える力",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 20, padding: "20px 0", borderBottom: "1px solid #2e2e2e" }}>
                  <span style={{ fontSize: 11, color: "#555", fontWeight: 500, width: 24, textAlign: "right", flexShrink: 0 }}>0{i + 1}</span>
                  <span style={{ fontSize: 15, color: "#e8e8e8", fontWeight: 400, lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div style={{ marginTop: 64, padding: "40px 0", borderTop: "1px solid #2e2e2e" }}>
              <p style={{ fontSize: "clamp(16px, 2.5vw, 22px)", fontWeight: 500, lineHeight: 1.8, color: "#fff" }}>
                守られる存在から、<br />自ら守れる存在へ。<br />
                <span style={{ color: "#888", fontSize: 14, fontWeight: 300 }}>それがVISIQの目指す姿です。</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* AI USAGE */}
      <section style={{ background: "#fff", padding: "100px 24px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <Reveal>
            <p style={{ fontSize: 11, letterSpacing: "0.16em", color: "#aaa", marginBottom: 40, fontWeight: 500 }}>AI × THINKING</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 style={{ fontSize: "clamp(20px, 3.5vw, 28px)", fontWeight: 700, lineHeight: 1.7, marginBottom: 32 }}>
              VISIQでは、AIを<br />「思考を整理するための鏡」として扱います。
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p style={{ fontSize: 15, color: "#555", lineHeight: 2, marginBottom: 40, fontWeight: 300 }}>
              AIの出力は最終解ではありません。それを材料にして「自分で考える」ことが本質です。気になる動画やSNS投稿をAIに渡し、論理構造・根拠・反対意見・感情操作の有無を分析させます。
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div style={{ background: "#f7f7f5", borderRadius: 8, padding: "36px 32px" }}>
              <p style={{ fontSize: 13, color: "#888", marginBottom: 20, fontWeight: 500, letterSpacing: "0.1em" }}>AI利用の原則</p>
              {[
                "AIの出力は必ず検証する",
                "個人情報は入力しない",
                "最終判断は必ず本人が行う",
                "段階的に使用を指導する",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 14 }}>
                  <span style={{ color: "#1a1a1a", fontWeight: 700, fontSize: 14, marginTop: 1 }}>—</span>
                  <span style={{ fontSize: 14, color: "#444", lineHeight: 1.7 }}>{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5 SKILLS */}
      <section style={{ background: "#f7f7f5", padding: "100px 24px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <Reveal>
            <p style={{ fontSize: 11, letterSpacing: "0.16em", color: "#aaa", marginBottom: 40, fontWeight: 500 }}>5 SKILLS</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 style={{ fontSize: "clamp(20px, 3.5vw, 28px)", fontWeight: 700, lineHeight: 1.7, marginBottom: 56 }}>
              この教育で育つ5つの力
            </h2>
          </Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {[
              { num: "01", title: "情動のコントロール", desc: "怒りや不安をそのまま行動に移さず、言語化して整理する力。" },
              { num: "02", title: "他者理解", desc: "相手の立場や感情を想像し、文脈を読み取る力。" },
              { num: "03", title: "メタ認知", desc: "「自分はいまどう考えているのか」を客観視する力。" },
              { num: "04", title: "選択の質の向上", desc: "衝動ではなく、根拠を持って判断する力。" },
              { num: "05", title: "知的自己防衛力", desc: "誤情報や印象操作に振り回されず、冷静に分解できる力。", highlight: true },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div style={{ borderTop: "1px solid #e0e0e0", padding: "28px 0", display: "flex", gap: 24, alignItems: "flex-start", background: item.highlight ? "rgba(26,26,26,0.03)" : "transparent", paddingLeft: item.highlight ? 16 : 0, borderLeft: item.highlight ? "3px solid #1a1a1a" : "none", marginLeft: item.highlight ? -16 : 0 }}>
                  <span style={{ fontSize: 11, color: "#bbb", fontWeight: 500, flexShrink: 0, marginTop: 4, width: 28 }}>{item.num}</span>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 600, color: "#1a1a1a", marginBottom: 8 }}>{item.title}</p>
                    <p style={{ fontSize: 14, color: "#666", lineHeight: 1.8, fontWeight: 300 }}>{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY ELEMENTARY */}
      <section style={{ background: "#fff", padding: "100px 24px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <Reveal>
            <p style={{ fontSize: 11, letterSpacing: "0.16em", color: "#aaa", marginBottom: 40, fontWeight: 500 }}>WHY ELEMENTARY</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 style={{ fontSize: "clamp(20px, 3.5vw, 28px)", fontWeight: 700, lineHeight: 1.7, marginBottom: 28 }}>
              なぜ小学生からなのか
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p style={{ fontSize: 15, color: "#555", lineHeight: 2, marginBottom: 28, fontWeight: 300 }}>
              小学生のうちは、思考習慣がまだ柔軟です。感情の扱い方、情報の見方、一度立ち止まる習慣——これらは早い段階で身につけるほど自然に定着します。
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p style={{ fontSize: 15, color: "#555", lineHeight: 2, fontWeight: 300 }}>
              中学生以降になると、受動的な姿勢や衝動的な反応パターンが固定化しやすくなります。だからこそVISIQは、<strong style={{ fontWeight: 600, color: "#1a1a1a" }}>小学生という時期に特化</strong>しています。
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div style={{ marginTop: 48, padding: "32px", background: "#f7f7f5", borderRadius: 8 }}>
              <p style={{ fontSize: 15, color: "#333", lineHeight: 1.9, fontWeight: 400, margin: 0 }}>
                VISIQは、塾ではありません。<br />
                <span style={{ color: "#666", fontWeight: 300 }}>答えを与えるのではなく、答えに辿り着くための<br />思考OSを育てる場です。学力は、その結果として伸びます。</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOR WHOM */}
      <section style={{ background: "#f7f7f5", padding: "100px 24px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <Reveal>
            <p style={{ fontSize: 11, letterSpacing: "0.16em", color: "#aaa", marginBottom: 40, fontWeight: 500 }}>FIT</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 style={{ fontSize: "clamp(20px, 3.5vw, 28px)", fontWeight: 700, lineHeight: 1.7, marginBottom: 40 }}>
              どんなご家庭に向いているか
            </h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <Reveal delay={0.1}>
              <div style={{ background: "#fff", borderRadius: 8, padding: "28px 24px" }}>
                <p style={{ fontSize: 12, color: "#888", marginBottom: 20, fontWeight: 500, letterSpacing: "0.1em" }}>向いているご家庭</p>
                {[
                  "自走できる力を育てたい",
                  "スマートフォン時代に備えたい",
                  "情報に強い子に育てたい",
                  "感情に振り回されない力をつけたい",
                  "AIを正しく使えるようにしたい",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 12 }}>
                    <span style={{ color: "#1a1a1a", fontSize: 12, marginTop: 3, flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: 13, color: "#444", lineHeight: 1.7 }}>{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div style={{ background: "#fff", borderRadius: 8, padding: "28px 24px" }}>
                <p style={{ fontSize: 12, color: "#bbb", marginBottom: 20, fontWeight: 500, letterSpacing: "0.1em" }}>向いていないご家庭</p>
                {[
                  "すぐに点数だけを上げたい",
                  "指示通りに動く子を育てたい",
                  "AIの利用に強い抵抗がある",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 12 }}>
                    <span style={{ color: "#ccc", fontSize: 12, marginTop: 3, flexShrink: 0 }}>—</span>
                    <span style={{ fontSize: 13, color: "#aaa", lineHeight: 1.7 }}>{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOUNDER MESSAGE */}
      <section style={{ background: "#fff", padding: "100px 24px" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <Reveal>
            <p style={{ fontSize: 11, letterSpacing: "0.16em", color: "#aaa", marginBottom: 40, fontWeight: 500 }}>FOUNDER</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 40 }}>
              <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#e8e8e8", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, color: "#bbb" }}>
                👤
              </div>
              <div>
                <p style={{ fontSize: 15, fontWeight: 600, color: "#1a1a1a", marginBottom: 4 }}>創業者メッセージ</p>
                <p style={{ fontSize: 13, color: "#aaa", fontWeight: 300 }}>VISIQ Academy Founder</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <blockquote style={{ margin: 0, padding: "0 0 0 24px", borderLeft: "2px solid #e0e0e0" }}>
              <p style={{ fontSize: 15, color: "#555", lineHeight: 2.1, fontWeight: 300, fontStyle: "normal" }}>
                成績が伸びる子と伸び悩む子の違いは、知識量ではありません。<strong style={{ fontWeight: 600, color: "#1a1a1a" }}>思考の土台があるかどうかです。</strong><br /><br />
                スマートフォンを持つことは避けられません。しかし、無防備である必要もありません。<br /><br />
                守られる子どもではなく、自ら守れる子どもへ。VISIQ Academyは、AIを通じて人間の基礎を育てる教育を実践します。
              </p>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" style={{ background: "#1a1a1a", padding: "120px 24px", textAlign: "center", color: "#fff" }}>
        <div style={{ maxWidth: 540, margin: "0 auto" }}>
          <Reveal>
            <p style={{ fontSize: 11, letterSpacing: "0.16em", color: "#555", marginBottom: 40, fontWeight: 500 }}>FREE TRIAL</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 style={{ fontSize: "clamp(22px, 4vw, 34px)", fontWeight: 700, lineHeight: 1.7, marginBottom: 24 }}>
              未来の準備を、いま。
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p style={{ fontSize: 15, color: "#888", lineHeight: 2, marginBottom: 16, fontWeight: 300 }}>
              AIに使われる人ではなく、<br />AIを使いこなせる人へ。
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p style={{ fontSize: 14, color: "#666", lineHeight: 2, marginBottom: 52, fontWeight: 300 }}>
              その前に必要なのは、知的自己防衛力。<br />無料体験会で、VISIQの思考トレーニングを体験してみてください。
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <a
              href="mailto:info@visiq.academy"
              style={{ display: "inline-block", background: "#fff", color: "#1a1a1a", padding: "18px 48px", fontSize: 14, fontWeight: 600, letterSpacing: "0.06em", textDecoration: "none", borderRadius: 4 }}
            >
              無料体験会に申し込む
            </a>
            <p style={{ fontSize: 12, color: "#555", marginTop: 20, fontWeight: 300 }}>
              ご質問・ご相談はいつでもお気軽にどうぞ。
            </p>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#111", padding: "40px 24px", textAlign: "center" }}>
        <p style={{ fontSize: 12, color: "#444", fontWeight: 300 }}>
          © 2025 VISIQ Academy. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
