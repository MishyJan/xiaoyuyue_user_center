import { Component, Injector, OnInit } from '@angular/core';

import { AppComponentBase } from '@shared/common/app-component-base';
import { appModuleAnimation } from 'shared/animations/routerTransition';

@Component({
    selector: 'xiaoyuyue-security',
    templateUrl: './security.component.html',
    styleUrls: ['./security.component.scss'],
    animations: [appModuleAnimation()]
})
export class SecurityComponent extends AppComponentBase implements OnInit {

    constructor(
        injector: Injector
    ) {
        super(injector);
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        // TODO: 暂时处理
        $('#headerTitle').text('账户安全');
    }

    stayTuned(): void {
        this.message.info('正在完善中...', '敬请期待');
    }

}

