// Golden Brown - The Stranglers
// Transcribed from the original MIDI | Bb minor, 3/4 (waltz), 188 BPM
const mel = "<[~ f4 ~ ~ f4 ~] [~ f4 ~ ~ f4 ~] [~ fs4 ~ ~ fs4 ~] [~ f4 ~ f4 ~ f4] [~ f4 ~ f4 ~ ~] [f4 ~ ~ f4 ~ ~] [f4 ~ ~ fs4 ~ ~] [fs4 ~ ~ f4 ~ f4] [~ f4 ~ f4 ~ f4] [~ ~ f4 ~ ~ f4] [~ ~ f4 ~ ~ fs4] [~ ~ fs4 ~ ~ f4] [~ f4 ~ f4 ~ f4] [~ f4 ~ ~ f4 ~] [~ f4 ~ ~ f4 ~] [~ ds4 ~ ~ ds4 ~]>"
const grv = "<[as2 ~ ~ f3 ~ as2] [f2 ~ ~ c3 ~ f2] [fs2 ~ ~ cs3 ~ fs3] [f3 ~ ds3 ~ cs3 ~] [c3 ~ as2 ~ ~ f3] [~ as2 f2 ~ ~ c3] [~ f2 fs2 ~ ~ cs3] [~ fs3 f3 ~ ds3 ~] [cs3 ~ c3 ~ as2 ~] [~ f3 ~ as2 f2 ~] [~ c3 ~ f2 fs2 ~] [~ cs3 ~ fs3 f3 ~] [ds3 ~ cs3 ~ c3 ~] [as2 ~ ~ f3 ~ as2] [f2 ~ ~ c3 ~ f2] [gs2 ~ ~ ds3 ~ gs2]>"
stack(
  // MELODY - harpsichord (the signature hook)
  mel.note().s("gm_harpsichord").clip(1).release(0.2).room(0.35).gain(0.8),
  // GROOVE - piano (left-hand waltz figure)
  grv.note().s("gm_piano").clip(1).release(0.4).room(0.2).gain(0.6),
  // PAD - violin doubling the melody an octave up for shimmer
  mel.add(12).note().s("gm_violin").attack(0.1).release(0.5).room(0.6).gain(0.3)
).slow(1).cpm(188/3)
