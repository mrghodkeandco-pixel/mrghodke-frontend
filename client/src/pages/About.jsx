import React from 'react';

export default function About() {
  return (
    <div style={{ maxWidth: 980, margin: '0 auto', lineHeight: 1.6, padding: '0 16px' }}>
      <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 36 }}>About Us</h1>

      <h2 style={{ fontFamily: 'Playfair Display, serif', marginTop: 8 }}>
        A Legacy Wrapped in Sweetness Since 1935
      </h2>

      <p style={{ color: 'var(--muted)' }}>
        Our story begins even before Pune. Our great-great-grandfather, Mudhoji Ramchand Ghodke,
        first started selling pedhas in Satara, where his dedication to purity and craftsmanship won
        the hearts of the local community. Later, he shifted to Pune, planting the roots of what would
        become our family’s enduring legacy in mithai.
      </p>

      <p style={{ color: 'var(--muted)' }}>
        In 1935, our great-grandfather Harishchandra Mudhoji Ghodke opened the doors to a small
        sweet shop in Pune with one firm belief:
      </p>

      <blockquote
        style={{
          background: 'var(--cream)',
          padding: 16,
          borderLeft: `4px solid var(--gold)`,
          fontStyle: 'italic',
          color: 'var(--brown)',
        }}
      >
        “Never compromise on quality — not for profit, not for speed.”
      </blockquote>

      <p style={{ color: 'var(--muted)' }}>
        Since then, the legacy of upholding that promise was carried forward with devotion by our
        late father and visionary, Vijay Harishchandra Ghodke — son of Harishchandra Ghodke — who
        preserved the same values with unwavering pride and purpose.
      </p>

      <p style={{ color: 'var(--muted)' }}>
        For 90 years, our family has handcrafted sweets the traditional way — slowly, honestly, and
        with deep love for every detail. We don’t just make mithai — we preserve culture, memory,
        and roots, one pedha at a time.
      </p>

      <p style={{ color: 'var(--muted)' }}>
        Over the decades, our sweets have quietly found their way into grand celebrations, temple
        rituals, and wedding thalis and the everyday joys that matter just as much. Be it a father
        bringing home pedhas for his child’s exam results, a birthday in a small home,— our mithai
        has been there, sweetening life’s big and little moments alike.
      </p>

      <p style={{ color: 'var(--muted)', fontWeight: 600 }}>
        M.R. Ghodke & Company isn’t just a business — it’s a legacy. A living memory of the times when
        sweets were more than just sugar — they were love, culture, and connection. What started in
        the heart of Pune has become a part of countless hearts.
      </p>

      <h3 style={{ fontFamily: 'Playfair Display, serif', marginTop: 20 }}>From the Founder’s Family</h3>

      <p style={{ color: 'var(--muted)' }}>
        We carry forward our great-grandfather’s legacy with pride and purpose. Every sweet that
        leaves our hands still holds his values — and our heart. Taking this journey online is not
        just about reaching more people — it’s about reconnecting with those who grew up with us,
        and inviting new generations to taste what tradition truly means.
      </p>

      <p style={{ color: 'var(--muted)' }}>Come taste tradition. From our family to yours.</p>

      <p style={{ fontWeight: 700, marginTop: 12 }}>Welcome Home</p>
      <p style={{ marginTop: 4, fontStyle: 'italic' }}>— The Ghodke Family</p>

      <section
        style={{
          marginTop: 28,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 16,
        }}
      >
        <div style={{ background: 'white', padding: 16, borderRadius: 8 }}>
          <h4 style={{ marginTop: 0 }}>Tagline</h4>
          <ul style={{ color: 'var(--muted)' }}>
            <li>Legacy & Tradition Focused</li>
            <li>Sweetness Handed Down Since 1936</li>
            <li>Crafted with Legacy. Served with Love.</li>
            <li>Where Every Sweet Tells a Story.</li>
          </ul>
        </div>

        <div style={{ background: 'white', padding: 16, borderRadius: 8 }}>
          <h4 style={{ marginTop: 0 }}>Emotional & Nostalgic</h4>
          <ul style={{ color: 'var(--muted)' }}>
            <li>The Taste You Grew Up With.</li>
            <li>Not Just Mithai. A Piece of Home.</li>
            <li>For the Heart. From the Heart.</li>
            <li>Because Some Flavours Never Fade.</li>
          </ul>
        </div>

        <div style={{ background: 'white', padding: 16, borderRadius: 8 }}>
          <h4 style={{ marginTop: 0 }}>Craftsmanship & Quality</h4>
          <ul style={{ color: 'var(--muted)' }}>
            <li>Tradition in Every Bite.</li>
            <li>Pure. Honest. Handmade. Always.</li>
            <li>No Shortcuts. Just Legacy.</li>
            <li>Mithai, the Way It Was Meant to Be.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}