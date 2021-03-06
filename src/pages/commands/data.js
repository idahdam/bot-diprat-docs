export const BannerData = {
    "title" : "Commands",
    "body" : "List of Commands available for the bot.",
    "button" : "Bot is currently offline."
};

export const Basic = 
[{command: '~play {youtube link}', expl: 'Will play the said youtube video link. If there is a song being played, the song will be added to the queue.'},
{command: '~stop', expl: 'Stop the currently playing song.'},
{command: '~play {youtube link}', expl: 'Will play the said youtube video link.'},
{command: '~play {youtube link}', expl: 'Will play the said youtube video link.'},
{command: '~play {youtube link}', expl: 'Will play the said youtube video link.'},]

export const Math = 
[{command:'~sum args*', expl:'Will add numbers from left to right.'},
{command:'~sub args*', expl:'Will subtract numbers from left to right.'},
{command:'~mul args*', expl:'Will multiply numbers from left to right.'},
{command: '~div args*', expl: 'Will divide numbers from left to right.'},
{command: '~ocr {link}', expl: 'Will return text from image using OCR techology. Might break if your image is BAD*.'}
]

export const Random = 
[
{command: '~help', expl: 'Will help you.'},
{command:'~ping', expl:'will return `Ping lo sebesar {number}ms.`'},
{command:'~ribut', expl:'Will play the boxing bell sound.'},
{command:'~yoou', expl:'Will play the `YOOOOU`.'},
{command:'~megalovania', expl:'Will play megalovania.'},
{command: '~feelingfrench', expl: 'Will play the feeling french meme song.'},
{command: '~buaya arg', expl: 'Will return buaya for arg time(s), 9 at max.'}
]

export const FML = 
[{command:'COMMAND 1', expl:'EXPLANATION 1 LOREM IPSUM DOLOR SIT AMET OR WHATEVER THE FUCK IT WAS 1'},
{command:'COMMAND 2', expl:'EXPLANATION 2 LOREM IPSUM DOLOR SIT AMET OR WHATEVER THE FUCK IT WAS 2'},
{command:'COMMAND 3', expl:'EXPLANATION 3 LOREM IPSUM DOLOR SIT AMET OR WHATEVER THE FUCK IT WAS 3'},
{command: 'COMMAND 4', expl: 'EXPLANATION 4 LOREM IPSUM DOLOR SIT AMET OR WHATEVER THE FUCK IT WAS 4'}
]

export const CommandTitles = [
  {title: "Basic"},
  {title: "Math"},
  {title: "Random"},
  {title: "FML"}
]

export const Routes = [
    {
      path: "/Math",
      exact: true,
      sidebar: () => null,
      main: () => <h2>Math</h2>

    },
    {
      path: "/Random",
      sidebar: () => null,
      main: () => <h2>Random</h2>
    },
    {
      path: "/FML",
      sidebar: () => null,
      main: () => <h2>FML</h2>
    }
  ];