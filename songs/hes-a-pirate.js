// He's a Pirate - Pirates of the Caribbean (Klaus Badelt/Hans Zimmer)
// Transcribed from MIDI | D minor, 6/8, 200 BPM | main theme

// MELODY - right hand (the epic theme)
const mel = "<[d4@2 d4@2 d4 e4] [f4@2 f4@2 f4 g4] [e4@2 e4@2 d4 c4] [c4 d4@2 ~ a3 c4] [d4@2 d4@2 d4 e4] [f4@2 f4@2 f4 g4] [e4@2 e4@2 d4 c4] [d4@2 ~@2 a3 c4] [d4@2 d4@2 d4 f4] [g4@2 g4@2 g4 a4] [as4@2 as4@2 a4 g4] [a4 d4@2 ~ d4 e4] [f4@2 f4@2 g4@2] [a4 d4@2 ~ d4 f4] [e4@2 e4@2 f4 d4] [e4 ~@3 a4 c5]>"

// BASS - left hand (rhythmic gallop)
const bass = "<[d2 ~ d2 d2 ~ c2] [as1 ~ as1 as1 ~ as1] [a1 ~ a1 a1 ~ a1] [d2 ~ d2 d2 ~ d2] [as1 ~ as1 as1 ~ as1] [f1 ~ f1 f1 ~ f1] [c2 ~ c2 a1 ~ a1] [d2 ~ d2 d2 ~ d2] [d2 ~ d2 d2 ~ d2] [as1 ~ as1 as1 ~ as1] [g1 ~ g1 g1 ~ g1] [d2 ~ d2 d2 ~ d2] [as1 ~ as1 as1 ~ as1] [d2 ~ d2 d2 ~ d2] [a1 ~ a1 a1 ~ a1] [a1 ~ a1 a1 ~ a1]>"

stack(
  // STRINGS - main melody, epic
  mel.note().s("gm_string_ensemble_1").attack(0.02).release(0.3).room(0.4).gain(0.75),

  // VIOLIN - doubles the melody an octave up for brightness
  mel.add(12).note().s("gm_violin").attack(0.05).release(0.3).room(0.5).gain(0.35),

  // CELLO - low gallop
  bass.note().s("gm_cello").attack(0.01).release(0.2).room(0.3).gain(0.6),

  // PERCUSSION - epic downbeat
  s("bd ~ ~ bd ~ ~").bank("RolandTR909").gain(0.4)
).slow(16).cpm(200/3)
