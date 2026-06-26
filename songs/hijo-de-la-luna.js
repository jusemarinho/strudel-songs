// Hijo de la Luna - Mecano
// Transcribed from MIDI | C minor, 3/4 (waltz), 172 BPM

// MELODY - vocal line ("Tonto el que no entienda...")
const mel = "<[~@2 g4@2 f4@2] [~@2 d4@2 c4@2] [~@2 ds4@2 f4@2] [~@2 d4@2 c4@2] [~@2 g4@2 f4@2] [~@2 d4@2 c4@2] [~@2 ds4@2 f4@2] [~@2 d4@2 c4@2] [~@2 c4 d4 ds4 g4] [d4@4 c4@2] [~@2 c4@2 d4@2] [~@2 ds4@2 f4@2] [~@2 c4 d4 ds4 g4] [d4@4 c4@2] [~@2 c4@2 d4@2] [~@2 ds4@2 f4@2]>"

// ACCOMPANIMENT - waltz (bass on beat 1, chords on beats 2 and 3)
const acc = "<[c3 ~ ~] [c3 as3 ~] [c3 as3 ~] [c3 as3 ~] [c3 ~ ~] [g2 as3 ~] [gs2 as3 ~] [g2 as3 ~] [c2 g2,d3 ~] [f2 gs2,c3 ~] [c2 ds2,as2,g3 gs3] [b1 g2,b2,g3 ~] [c2 g2,d3 ~] [f2 gs2,c3 ~] [c2 ds2,as2,g3 gs3] [b1 g2,b2,g3 ~]>"

stack(
  // PIANO - melody
  mel.note().s("gm_piano").clip(1).release(0.3).room(0.4).gain(0.8),

  // STRINGS - double the melody, soft and dramatic
  mel.note().s("gm_string_ensemble_1").attack(0.15).release(0.5).room(0.6).gain(0.3),

  // PIANO - waltz accompaniment
  acc.note().s("gm_piano").clip(1).release(0.4).room(0.3).gain(0.5)
).slow(1).cpm(172/3)
