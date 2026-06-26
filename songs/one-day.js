// One Day - Pirates of the Caribbean: At World's End (Hans Zimmer)
// Transcribed from MIDI | D minor, 4/4, 85 BPM | theme (French horn)

// MELODY - cantabile theme (French horn line)
const mel = "<[~@2 a3@2 d4@2 e4@2] [f4@4 e4@2 f4@2] [g4@4 f4@2 g4@2] [a4@4 g4@2 f4@2] [d4@4 d4@2 e4@2] [f4@4 g4@2 a4@2] [as4@4 d4@3 g4] [f4@8] [e4@2 a3@2 d4@2 e4@2] [f4@4 e4@2 f4@2] [g4@4 f4@2 g4@2] [a4@4 g4@2 f4@2] [d4@4 ~@4] [~@8] [~@8] [~@2 d4@2 f4@4]>"

// BASS - low strings
const bass = "<[a1@4 a1@4] [d2@4 d2@4] [c2@4 c2@4] [f2@4 f2@4] [as1@4 as1@4] [d2@4 e2@4] [g2@4 g2@4] [a1@4 a1@4] [a1@4 a1@4] [d2@4 d2@4] [c2@4 c2@4] [f1@4 g1@4] [as1@4 as1@4] [d2@4 e2@4] [g2@4 g2@4] [a1@4 a1@4]>"

stack(
  // STRINGS - main melody, emotive
  mel.note().s("gm_string_ensemble_1").attack(0.05).release(0.5).room(0.6).gain(0.7),

  // FLUTE - doubles the melody an octave up, soft
  mel.add(12).note().s("gm_flute").attack(0.1).release(0.4).room(0.6).gain(0.3),

  // CELLO - low foundation
  bass.note().s("gm_cello").attack(0.05).release(0.6).room(0.4).gain(0.55),

  // HARP - doubles the bass an octave up, brightness
  bass.add(12).note().s("gm_harp").attack(0.01).release(0.5).room(0.5).gain(0.3)
).slow(1).cpm(85/4)
