import { Component, OnInit } from '@angular/core';
import { LanguageService } from "../../language-service/language.service";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {


  constructor(
    private lang: LanguageService,
    private trans: TranslateService) {
    this.lang.$lang.subscribe(l => {
      this.trans.use(l);
    })
  }
  
  ngOnInit() {
  }

}
