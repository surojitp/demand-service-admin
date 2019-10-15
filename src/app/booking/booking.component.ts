import { Component, OnInit } from '@angular/core';
import { UserService } from '../userservice/user.service';
import { MessageService } from '../userservice/message.services';
import { PagerServiceService } from '../pager-service.service';
import { Http} from '@angular/http';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
    edit: boolean;
    data: any;
    admintoken: any;
    pagetitle: any;
    popupDiv: any;
    item: any = {};
    user: string;
    agent: string;
    private _searchTerm: any;
    offset_limit: any = {
        offset: 0,
        limit: 10,
        searchTerm: ''
    };
    // array of all items to be paged
     private allItems: any[];
     allItems_length: number;

     // pager object
     pager: any = {};

     // paged items
     pagedItems: any[];

    constructor(private http: Http,
        private _appservice: UserService,
        private _message: MessageService,
        private pagerService: PagerServiceService
    ) { }

    ngOnInit(): void {
        document.getElementById('overlay').style.display = 'block';
        // this.data = '';
        this.admintoken = localStorage.getItem('admintoken');
        this.getData(this.offset_limit, 0);
    }
    get searchTerm() {
        return this._searchTerm;
    }
    set searchTerm(value) {
        this._searchTerm = value;
        this.offset_limit.searchTerm = value;
        this.getData(this.offset_limit, 0);
    }
    getData(data, onLoad: any) {
        // tslint:disable-next-line:no-shadowed-variable
        this._appservice.listBooking(data).subscribe((Response) => {
            if (Response.STATUSCODE === 4002) {
                this._message.showError(Response.message);
                localStorage.clear();
                location.reload();
            } else {
                if (Response.success) {
                    const result = Response.response;
                    this.data = result;
                    // total item length
                    this.allItems_length = Response.totalData;

                    // initialize to page 1
                    if (onLoad === 0) {
                        this.setPage(1);
                    }
                    document.getElementById('overlay').style.display = 'none';
                } else {
                    this._message.showWarning(Response.message);
                }
            }
        },
        (Error) => {
        });
    }
    setPage(page: number) {
        // get pager object from service
        this.pager = this.pagerService.getPager(this.allItems_length, page);
        console.log('pager', this.pager);


        // get current page of items
        // this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
        if (this.pager.totalPages > 0) {
            this.offset_limit.offset = this.pager.startIndex;
            this.offset_limit.limit = this.pager.endIndex + 1;
            this.offset_limit.searchTerm = this._searchTerm;
            this.getData(this.offset_limit, 1);
        }
    }

    getDetails(str: any) {
        console.log(str);
        this.user = str.user.fullName;
        this.agent = str.provider.fullName;
        this.edit = true;
        this.popupDiv = true;
        this.pagetitle = 'View Details';
        this.item = str;
    }
    completeStatusChange(str){
        console.log(str);
        if(str.requestStatus == 'CANCEL'){
            this._message.showWarning("This service already canceled")
        }else{
            //if(str.completeStatus == 'PENDING' && confirm('Are you sure?')){
            if(str.completeStatus == 'PENDING' && confirm('Are you sure?')){
                this._appservice.completeService(str).subscribe((Response) => {
                    if (Response.STATUSCODE === 4002) {
                        this._message.showError(Response.message);
                        localStorage.clear();
                        location.reload();
                    } else {
                        if (Response.success) {
                            str.completeStatus = 'COMPLETE'
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
        
    }
    clear() {
        this.ngOnInit();
    }

}


