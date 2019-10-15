import { Component, OnInit } from '@angular/core';
import { UserService } from '../userservice/user.service';
import { MessageService } from '../userservice/message.services';
import { PagerServiceService } from '../pager-service.service';
import { Http} from '@angular/http';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  serviceRadius: Number;
  constructor(private http: Http,
    private _appservice: UserService,
    private _message: MessageService,
    private pagerService: PagerServiceService) { }

  ngOnInit() {
    document.getElementById('overlay').style.display = 'block';
    this.getServiceRadius();
  }

  getServiceRadius(){
    this._appservice.getRadius({}).subscribe((Response) => {
      console.log(Response);
      
      if (Response.STATUSCODE === 4002) {
          this._message.showError(Response.message);
          localStorage.clear();
          location.reload();
      } else {
            if (Response.success) {
                const result = Response.response;
                this.serviceRadius = result.serviceRadius;
               
                document.getElementById('overlay').style.display = 'none';
            } else {
                this._message.showWarning(Response.message);
            }
        }
    },
    (Error) => {
    });
  }
  updateRadius(){
    let flag = 0, errorMessage;
    if (! this.serviceRadius) {
      errorMessage = 'Please enter service radius';
      flag = 1;
      this._message.showError(errorMessage);
      return false;
    }
    document.getElementById('overlay').style.display = 'block';
    this._appservice.updateRadius({serviceRadius: this.serviceRadius}).subscribe((Response) => {
      console.log(Response);
      
      if (Response.STATUSCODE === 4002) {
          this._message.showError(Response.message);
          localStorage.clear();
          location.reload();
      } else {
            if (Response.success) {
                this._message.showSuccess(Response.message);
                const result = Response.response;
                
                document.getElementById('overlay').style.display = 'none';
            } else {
                this._message.showWarning(Response.message);
            }
        }
    },
    (Error) => {
    });
  }

}
