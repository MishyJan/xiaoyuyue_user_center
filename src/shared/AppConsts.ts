﻿import { Booking } from './service-proxies/service-proxies';
import { state } from '@angular/core';

export class AppConsts {

    static readonly tenancyNamePlaceHolderInUrl = '{TENANCY_NAME}';

    static remoteServiceBaseUrl: string;
    static remoteServiceBaseUrlFormat: string;

    static appBaseUrl: string;
    static appBaseUrlFormat: string;

    static userCenterUrl: string;
    static businessCenterUrl: string;

    static BookingPicture: string;
    static readonly externalLoginUrl = '/auth/login';

    static readonly userManagement = {
        defaultAdminUserName: 'admin'
    };

    static readonly localization = {
        commonLocalizationSourceName: 'Xiaoyuyue',
        defaultLocalizationSourceName: 'UserCenter'
    };

    static readonly authorization = {
        encrptedAuthTokenName: 'enc_auth_token'
    };

    static readonly grid = {
        defaultPageSize: 1,
        pageSizes: [5, 10, 20, 50, 100],
        maxPageSize: 1000,
    }

    static readonly accessRecord = {
        bookings: 'access_bookings'
    };
}

export class MediaPath {
    static defaultProfilePictureUrl = '/assets/common/images/default-profile-picture.png';
    static defaultBgUrl = '/assets/common/images/default-bg.png';
}

export class MediaCompressFormat {
    static bookingPictureFormat = 'imageView2/2/w/800/q/100|imageslim';
    static outletPictureFormat = 'imageView2/2/w/800/q/100|imageslim';
    static timelinePictureFormat = 'imageView2/2/w/100/q/100|imageslim';
    static profilePictureFormat = 'imageView2/2/w/800/q/100|imageslim';
}

export class SMSProviderDto {
    static phoneNum: string;
    static emailAddress: string;
    static sendCodeSecond = 60;
    static readonly timeInterval = 1000;
}

export class InitLanguage {
    static all = ['zh-CN', 'zh-HK'];
}
