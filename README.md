# strudel-songs

Song covers written in [Strudel](https://strudel.cc) mini-notation, transcribed
from MIDI. Just a place to keep the code.

To play one: open <https://strudel.cc>, paste the contents of the file, and hit
play.

## Songs

| File | Song | Source | Key / Time / BPM |
| --- | --- | --- | --- |
| [`songs/golden-brown.js`](songs/golden-brown.js) | Golden Brown | The Stranglers | Bb minor · 3/4 · 188 |
| [`songs/romantic-flight.js`](songs/romantic-flight.js) | Romantic Flight | John Powell — *How to Train Your Dragon* | B major · 3/4 · 96 |
| [`songs/hes-a-pirate.js`](songs/hes-a-pirate.js) | He's a Pirate | Klaus Badelt / Hans Zimmer — *Pirates of the Caribbean* | D minor · 6/8 · 200 |
| [`songs/one-day.js`](songs/one-day.js) | One Day | Hans Zimmer — *Pirates of the Caribbean: At World's End* | D minor · 4/4 · 85 |
| [`songs/hijo-de-la-luna.js`](songs/hijo-de-la-luna.js) | Hijo de la Luna | Mecano | C minor · 3/4 · 172 |

## Disclaimer

These are **fan transcriptions for educational, non-commercial purposes**. The
underlying musical compositions are the property of their respective composers,
authors and publishers — no ownership is claimed over them here. Only the
Strudel implementation code in this repository is my own work. If you are a
rights holder and want a transcription removed, please open an issue.

> São **transcrições de fã, para fins educacionais e sem fins lucrativos**. As
> composições musicais pertencem aos seus respectivos autores, compositores e
> editoras — não reivindico nenhum direito sobre elas. Apenas o código em
> Strudel deste repositório é de minha autoria. Se você detém os direitos e
> deseja a remoção de alguma transcrição, abra uma issue.

## Notation conventions

- Patterns are mini-notation strings; instrument/effects chain off them:
  `"<[d4@2 d4 e4]>".note().s("gm_violin").gain(0.75)`.
- Tempo via `.cpm(BPM/beatsPerBar)` at the end of the `stack(...)`.
- Note durations use `@` (`d4@2`); rest is `~`; chords use commas (`d3,f3,a3`).
- Sharps are the letter `s` (`fs4`, `cs3`), never `#`.
- Octave up: `.add(12)` before `.note()`.
