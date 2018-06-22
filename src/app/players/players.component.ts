import { Component, OnInit, OnDestroy } from '@angular/core';
import { Player } from '../player';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit, OnDestroy {
  private sub: any;
  name: string;
  data: any;
  playerStats = new Map<string, string[]>();
  playerList: Player[] = [
    {
      jerseyNumber: 10,
      playerName: 'messi',
      country: 'argentina',
      ranking: 1
    },
    {
      jerseyNumber: 7,
      playerName: 'ronaldo',
      country: 'portugal',
      ranking: 2
    },
    {
      jerseyNumber: 21,
      playerName: 'lewandowski',
      country: 'poland',
      ranking: 3
    },
    {
      jerseyNumber: 14,
      playerName: 'Ramirez',
      country: 'brazil',
      ranking: 4
    }
  ];
  constructor(private route: ActivatedRoute, private router: Router) {
    this.playerStats.set('messi', ['goals-500', 'transfer-800000']);
    this.playerStats.set('ronaldo', ['goals-600', 'transfer-760000']);
    this.playerStats.set('lewandowski', ['goals-400', 'transfer-620000']);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.name = params['name'];
      console.log("passed player name is " + this.name);
      this.data = this.playerStats.get(this.name);
      if(this.name === 'Ramirez'){
        this.router.navigate(['/sponsor', this.name]);
      }      
    });
    //console.log("passed player name is " + this.name);
    //this.handleIt()
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  handleIt(player) {
    console.log(this.route.params);

    //this.name = this.route.params.value['name'];
    // console.log("passed player name is " + this.name);
    //console.log("passed player name is " + player.playerName);
  }

}
