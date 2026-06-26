// Romantic Flight - John Powell (How to Train Your Dragon)
// Transcribed from MIDI | B major, 3/4, 96 BPM | real note durations

const melody = "<[b3@4 cs4@4 e4@6 f4 e4 ds4@8] [~@4 fs4@4 ds4@16] [~@8 cs4@8 b3@8] [~@4 ds4@4 ~@16] [~@8 cs4@8 ds4@8] [fs4@8 b4@16] [~@8 b4@8 cs5@8] [~@4 ds5@4 cs5@16] [~@8 fs4@8 gs4@8] [b4@8 gs4@4 fs4@4 fs4@8] [ds4@8 b3@4 cs4@4 cs4@8] [~@4 fs4@4 ds4@4 cs4@4 cs4@8]>"

const chords = "<[~ ~ b2,fs3] [~ b2,fs3 ~] [~ fs2 b2,fs3] [~ b2,fs3 ~] [~ fs2 b2] [as2,fs3 gs2,ds3,gs3 ~] [~ b2,e3 ~] [~ as2,fs3 ~] [~ fs3 ~] [ds3 e2,b2 e3] [~ gs2,ds3 gs3] [~ e2,b2 e3]>"

stack(
  // MELODY - violin (the flight theme), sustained notes
  melody.note().s("gm_violin").attack(0.08).release(0.4).room(0.5).gain(0.8),

  // ACCOMPANIMENT - piano (waltz chords)
  chords.note().s("gm_piano").clip(1).release(0.5).room(0.35).gain(0.45)
).slow(12).cpm(96/3)
