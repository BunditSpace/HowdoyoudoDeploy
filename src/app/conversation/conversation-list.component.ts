import { RatingComponent } from './../shared/rating.component';
import {Component,
  Input,
  Output,
  EventEmitter,
  OnInit
} from '@angular/core';

import { ConversationService } from './services/conversation.service';
import { Conversation } from './conversation';


@Component({
  selector: 'conversation-list',
  templateUrl: './conversation-list.html'
})
export class ConversationList implements OnInit{
  ngOnInit(): void {
  }

   @Input() conversations: Conversation[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  constructor() 
  {

  }

  public selecteditem: Conversation;

  showModal(item:Conversation, dangerModal:any) {
    this.selecteditem = item;
    dangerModal.show();
  }
}
