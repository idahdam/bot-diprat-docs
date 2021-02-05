export const BannerData = {
    "title" : "Commands",
    "body" : "List of Commands available for the bot.",
    "button" : "Add this bot to your discord server!"
};

export const Math = 
[{command:'COMMAND 1', expl:'EXPLANATION 1 LOREM IPSUM DOLOR SIT AMET OR WHATEVER THE FUCK IT WAS 1'},
{command:'COMMAND 2', expl:'EXPLANATION 2 LOREM IPSUM DOLOR SIT AMET OR WHATEVER THE FUCK IT WAS 2'},
{command:'COMMAND 3', expl:'EXPLANATION 3 LOREM IPSUM DOLOR SIT AMET OR WHATEVER THE FUCK IT WAS 3'},
{command: 'COMMAND 4', expl: 'EXPLANATION 4 LOREM IPSUM DOLOR SIT AMET OR WHATEVER THE FUCK IT WAS 4'}
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