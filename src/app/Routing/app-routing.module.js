"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var userInfo_component_1 = require("../../UserBundle/components/userInfo/userInfo.component");
var userLogin_component_1 = require("../../UserBundle/components/userLogin/userLogin.component");
var main_component_1 = require("../../DashboardBundle/components/main/main.component");
var notice_component_1 = require("../../NoticeBundle/components/notice/notice.component");
var notFound_component_1 = require("../components/notFound/notFound.component");
var users_component_1 = require("../../UserBundle/components/users/users.component");
var analyticsMain_component_1 = require("../../AnalyticsBundle/components/analyticsMain/analyticsMain.component");
var currencyList_component_1 = require("../../CurrencyBundle/components/currencyList/currencyList.component");
var directoryMain_component_1 = require("../../CurrencyBundle/components/directoryMain/directoryMain.component");
var auth_service_1 = require("../services/auth.service");
var measureList_component_1 = require("../../MeasureBundle/components/measureList/measureList.component");
var countryList_component_1 = require("../../CountryBundle/components/countryList/countryList.component");
var parameterList_component_1 = require("../../ParameterBundle/components/parameterList/parameterList.component");
var organizationList_component_1 = require("../../OrganizationBundle/components/organizationList/organizationList.component");
var cityList_component_1 = require("../../CityBundle/components/cityList/cityList.component");
var rightList_component_1 = require("../../RightBundle/components/rightList/rightList.component");
var roleEdit_component_1 = require("../../RoleBundle/components/roleEdit/roleEdit.component");
var roleList_component_1 = require("../../RoleBundle/components/roleList/roleList.component");
var roleNew_component_1 = require("../../RoleBundle/components/roleNew/roleNew.component");
var loggerList_component_1 = require("../../LoggerBundle/components/loggerList/loggerList.component");
var userList_component_1 = require("../../UserBundle/components/userList/userList.component");
var userEdit_component_1 = require("../../UserBundle/components/userEdit/userEdit.component");
var changePassword_component_1 = require("../../UserBundle/components/changePassword/changePassword.component");
var userNew_component_1 = require("../../UserBundle/components/userNew/userNew.component");
var warehouseList_component_1 = require("../../WarehouseBundle/components/warehouseList/warehouseList.component");
var supplierList_component_1 = require("../../SupplierBundle/components/supplierList/supplierList.component");
var catalogList_component_1 = require("../../CatalogBundle/components/catalogList/catalogList.component");
var ClientList_component_1 = require("../../ClientBundle/components/clientList/ClientList.component");
var MarginList_component_1 = require("../../MarginBundle/components/marginList/MarginList.component");
var AssortimentList_component_1 = require("../../AssortimentBundle/components/assortimentList/AssortimentList.component");
var assortimentEdit_component_1 = require("../../AssortimentBundle/components/assortimentEdit/assortimentEdit.component");
var GoodsList_component_1 = require("../../GoodsBundle/components/goodsList/GoodsList.component");
var AliasList_component_1 = require("../../AliasBundle/components/aliasList/AliasList.component");
var ManufacturerList_component_1 = require("../../ManufacturerBundle/components/manufacturerList/ManufacturerList.component");
var BrandList_component_1 = require("../../BrandBundle/components/brandList/BrandList.component");
var OutpriceList_component_1 = require("../../OutpriceBundle/components/outpriceList/OutpriceList.component");
var outpriceEdit_component_1 = require("../../OutpriceBundle/components/outpriceEdit/outpriceEdit.component");
var InPriceList_component_1 = require("../../InPriceBundle/components/inPriceList/InPriceList.component");
var MarginGroupList_component_1 = require("../../MarginGroupBundle/components/marginGroupList/MarginGroupList.component");
var marginGroupEdit_component_1 = require("../../MarginGroupBundle/components/marginGroupEdit/marginGroupEdit.component");
var marginGroupNew_component_1 = require("../../MarginGroupBundle/components/marginGroupNew/marginGroupNew.component");
var OutFileList_component_1 = require("../../OutFileBundle/components/outFileList/OutFileList.component");
var outFileEdit_component_1 = require("../../OutFileBundle/components/outFileEdit/outFileEdit.component");
var outFileNew_component_1 = require("../../OutFileBundle/components/outFileNew/outFileNew.component");
var InFileList_component_1 = require("../../InFileBundle/components/inFileList/InFileList.component");
var ExtensionList_component_1 = require("../../ExtensionBundle/components/extensionList/ExtensionList.component");
var SeparatorLineList_component_1 = require("../../SeparatorLineBundle/components/separatorLineList/SeparatorLineList.component");
var destinationsNew_component_1 = require("../../DestinationsBundle/components/destinationsNew/destinationsNew.component");
var destinationsEdit_component_1 = require("../../DestinationsBundle/components/destinationsEdit/destinationsEdit.component");
var DestinationsList_component_1 = require("../../DestinationsBundle/components/destinationsList/DestinationsList.component");
var OutFileClientFilterList_component_1 = require("../../OutFileClientFilterBundle/components/outFileClientFilterList/OutFileClientFilterList.component");
var outFileClientFilterEdit_component_1 = require("../../OutFileClientFilterBundle/components/outFileClientFilterEdit/outFileClientFilterEdit.component");
var outFileClientFilterNew_component_1 = require("../../OutFileClientFilterBundle/components/outFileClientFilterNew/outFileClientFilterNew.component");
var FtpList_component_1 = require("../../FtpBundle/components/ftpList/FtpList.component");
var HttpList_component_1 = require("../../HttpBundle/components/httpList/HttpList.component");
var MailList_component_1 = require("../../MailBundle/components/mailList/MailList.component");
var LocalList_component_1 = require("../../LocalBundle/components/localList/LocalList.component");
var StatusWhList_component_1 = require("../../StatusWhBundle/components/statuswhList/StatusWhList.component");
var commonEditParentComponent_1 = require("../components/commonEditParentComponent/commonEditParentComponent");
var columnEdit_component_1 = require("../../ColumnBundle/components/columnEdit/columnEdit.component");
/**
 * Главный роутинг файл
 * @global
 * @name Routing
 * @see app/_src/js/CommonBundle/app-routing.module.ts
 * @property  { string } path: '' Если  путь будет пустым то сработает редирект на авторизацию '/user/login'
 * @property  { string } path: 'user/login' Отработает UserLoginComponent и выведет страницу аторизации
 * @property  { string } path: 'user/info' Отработает UserInfoComponent и выведет информацию о авторизованном пользователе
 * @property  { string } path: 'main' Отработает MainComponent и выведет главную страницу в Дашборде
 *
 */
var indexRoute = {
    path: '',
    component: main_component_1.MainComponent
};
var fallbackRoute = {
    path: '**',
    component: notFound_component_1.NotfoundComponent
};
var routes = [
    { path: '', redirectTo: '/user/login', pathMatch: 'full' },
    // { path: 'notice', redirectTo: '/user/info/notice', pathMatch: 'full' },
    { path: 'column', component: columnEdit_component_1.ColumnEditComponent, canActivate: [auth_service_1.AuthGuard] },
    {
        path: 'item', children: [
            { path: '', component: GoodsList_component_1.GoodsListComponent, canActivate: [auth_service_1.AuthGuard] },
            { path: 'edit/:id', component: commonEditParentComponent_1.CommonEditParentComponent, canActivate: [auth_service_1.AuthGuard] },
            { path: 'new', component: commonEditParentComponent_1.CommonEditParentComponent, canActivate: [auth_service_1.AuthGuard] },
            {
                path: 'catalog', children: [
                    { path: '', component: catalogList_component_1.CatalogListComponent, canActivate: [auth_service_1.AuthGuard] },
                    { path: 'edit/:id', component: commonEditParentComponent_1.CommonEditParentComponent, canActivate: [auth_service_1.AuthGuard] },
                    { path: 'new', component: commonEditParentComponent_1.CommonEditParentComponent, canActivate: [auth_service_1.AuthGuard] }
                ]
            },
            {
                path: 'alias', children: [
                    { path: '', component: AliasList_component_1.AliasListComponent, canActivate: [auth_service_1.AuthGuard] },
                    { path: 'edit/:id', component: commonEditParentComponent_1.CommonEditParentComponent, canActivate: [auth_service_1.AuthGuard] },
                    { path: 'new', component: commonEditParentComponent_1.CommonEditParentComponent, canActivate: [auth_service_1.AuthGuard] },
                ]
            },
            {
                path: 'manufacturer', children: [
                    { path: '', component: ManufacturerList_component_1.ManufacturerListComponent, canActivate: [auth_service_1.AuthGuard] },
                    { path: 'edit/:id', component: commonEditParentComponent_1.CommonEditParentComponent, canActivate: [auth_service_1.AuthGuard] },
                    { path: 'new', component: commonEditParentComponent_1.CommonEditParentComponent, canActivate: [auth_service_1.AuthGuard] },
                ]
            },
            {
                path: 'brand', children: [
                    { path: '', component: BrandList_component_1.BrandListComponent, canActivate: [auth_service_1.AuthGuard] },
                    { path: 'edit/:id', component: commonEditParentComponent_1.CommonEditParentComponent, canActivate: [auth_service_1.AuthGuard] },
                    { path: 'new', component: commonEditParentComponent_1.CommonEditParentComponent, canActivate: [auth_service_1.AuthGuard] },
                ]
            },
        ]
    },
    {
        path: 'destinations', children: [
            { path: '', component: DestinationsList_component_1.DestinationsListComponent, canActivate: [auth_service_1.AuthGuard] },
            { path: 'edit/:id', component: destinationsEdit_component_1.DestinationsEditComponent, canActivate: [auth_service_1.AuthGuard] },
            { path: 'new', component: destinationsNew_component_1.DestinationsNewComponent, canActivate: [auth_service_1.AuthGuard] }
        ]
    },
    {
        path: 'outFileClientFilter', children: [
            { path: '', component: OutFileClientFilterList_component_1.OutFileClientFilterListComponent, canActivate: [auth_service_1.AuthGuard] },
            { path: 'edit/:id', component: outFileClientFilterEdit_component_1.OutFileClientFilterEditComponent, canActivate: [auth_service_1.AuthGuard] },
            { path: 'new', component: outFileClientFilterNew_component_1.OutFileClientFilterNewComponent, canActivate: [auth_service_1.AuthGuard] }
        ]
    },
    {
        path: 'ftp', children: [
            { path: '', component: FtpList_component_1.FtpListComponent, canActivate: [auth_service_1.AuthGuard] },
            { path: 'edit/:id', component: commonEditParentComponent_1.CommonEditParentComponent, canActivate: [auth_service_1.AuthGuard] },
            { path: 'new', component: commonEditParentComponent_1.CommonEditParentComponent, canActivate: [auth_service_1.AuthGuard] }
        ]
    },
    {
        path: 'http', children: [
            { path: '', component: HttpList_component_1.HttpListComponent, canActivate: [auth_service_1.AuthGuard] },
            { path: 'edit/:id', component: commonEditParentComponent_1.CommonEditParentComponent, canActivate: [auth_service_1.AuthGuard] },
            { path: 'new', component: commonEditParentComponent_1.CommonEditParentComponent, canActivate: [auth_service_1.AuthGuard] }
        ]
    },
    {
        path: 'mail', children: [
            { path: '', component: MailList_component_1.MailListComponent, canActivate: [auth_service_1.AuthGuard] },
            { path: 'edit/:id', component: commonEditParentComponent_1.CommonEditParentComponent, canActivate: [auth_service_1.AuthGuard] },
            { path: 'new', component: commonEditParentComponent_1.CommonEditParentComponent, canActivate: [auth_service_1.AuthGuard] }
        ]
    },
    {
        path: 'local', children: [
            { path: '', component: LocalList_component_1.LocalListComponent, canActivate: [auth_service_1.AuthGuard] },
            { path: 'edit/:id', component: commonEditParentComponent_1.CommonEditParentComponent, canActivate: [auth_service_1.AuthGuard] },
            { path: 'new', component: commonEditParentComponent_1.CommonEditParentComponent, canActivate: [auth_service_1.AuthGuard] }
        ]
    },
    {
        path: 'client', children: [
            { path: '', component: ClientList_component_1.ClientListComponent, canActivate: [auth_service_1.AuthGuard] },
            { path: 'edit/:id', component: commonEditParentComponent_1.CommonEditParentComponent, canActivate: [auth_service_1.AuthGuard] },
            { path: 'new', component: commonEditParentComponent_1.CommonEditParentComponent, canActivate: [auth_service_1.AuthGuard] },
            {
                path: 'price', children: [
                    { path: '', component: OutpriceList_component_1.OutpriceListComponent, canActivate: [auth_service_1.AuthGuard] },
                    { path: 'edit/:id', component: outpriceEdit_component_1.OutpriceEditComponent, canActivate: [auth_service_1.AuthGuard] },
                    { path: 'new', component: outpriceEdit_component_1.OutpriceEditComponent, canActivate: [auth_service_1.AuthGuard] },
                    {
                        path: 'outfile', children: [
                            { path: '', component: OutFileList_component_1.OutFileListComponent, canActivate: [auth_service_1.AuthGuard] },
                            { path: 'edit/:id', component: outFileEdit_component_1.OutFileEditComponent, canActivate: [auth_service_1.AuthGuard] },
                            { path: 'new', component: outFileNew_component_1.OutFileNewComponent, canActivate: [auth_service_1.AuthGuard] },
                        ]
                    },
                ]
            },
            {
                path: 'margin_ch', children: [
                    { path: '', component: MarginList_component_1.MarginListComponent, canActivate: [auth_service_1.AuthGuard] },
                    { path: 'edit/:id', component: commonEditParentComponent_1.CommonEditParentComponent, canActivate: [auth_service_1.AuthGuard] },
                    { path: 'new', component: commonEditParentComponent_1.CommonEditParentComponent, canActivate: [auth_service_1.AuthGuard] },
                ]
            },
            {
                path: 'margin', children: [
                    { path: '', component: MarginGroupList_component_1.MarginGroupListComponent, canActivate: [auth_service_1.AuthGuard] },
                    { path: 'edit/:id', component: marginGroupEdit_component_1.MarginGroupEditComponent, canActivate: [auth_service_1.AuthGuard] },
                    { path: 'new', component: marginGroupNew_component_1.MarginGroupNewComponent, canActivate: [auth_service_1.AuthGuard] },
                ]
            },
            {
                path: 'assortiment', children: [
                    { path: '', component: AssortimentList_component_1.AssortimentListComponent, canActivate: [auth_service_1.AuthGuard] },
                    { path: 'edit/:id', component: assortimentEdit_component_1.AssortimentEditComponent, canActivate: [auth_service_1.AuthGuard] },
                    { path: 'new', component: assortimentEdit_component_1.AssortimentEditComponent, canActivate: [auth_service_1.AuthGuard] },
                ]
            },
        ]
    },
    {
        path: 'user', children: [
            {
                path: 'info', children: [
                    { path: 'notice', component: notice_component_1.NoticeComponent, canActivate: [auth_service_1.AuthGuard] },
                    { path: '', component: userInfo_component_1.UserInfoComponent, canActivate: [auth_service_1.AuthGuard] },
                ]
            },
            { path: 'changePassword/:id', component: changePassword_component_1.ChangePasswordComponent, canActivate: [auth_service_1.AuthGuard] },
            { path: '', component: users_component_1.UsersComponent },
            { path: 'login', component: userLogin_component_1.UserLoginComponent },
        ]
    },
    {
        path: 'supplier', canActivate: [auth_service_1.AuthGuard], children: [
            { path: '', component: supplierList_component_1.SupplierListComponent, canActivate: [auth_service_1.AuthGuard] },
            { path: 'edit/:id', component: commonEditParentComponent_1.CommonEditParentComponent, canActivate: [auth_service_1.AuthGuard] },
            { path: 'new', component: commonEditParentComponent_1.CommonEditParentComponent, canActivate: [auth_service_1.AuthGuard] },
            {
                path: 'inFile', children: [
                    { path: '', component: InFileList_component_1.InFileListComponent, canActivate: [auth_service_1.AuthGuard] },
                    { path: 'edit/:id', component: commonEditParentComponent_1.CommonEditParentComponent, canActivate: [auth_service_1.AuthGuard] },
                    { path: 'new', component: commonEditParentComponent_1.CommonEditParentComponent, canActivate: [auth_service_1.AuthGuard] },
                ]
            },
            {
                path: 'warehouse', children: [
                    { path: '', component: warehouseList_component_1.WarehouseListComponent, canActivate: [auth_service_1.AuthGuard] },
                    { path: 'edit/:id', component: commonEditParentComponent_1.CommonEditParentComponent, canActivate: [auth_service_1.AuthGuard] },
                    { path: 'new', component: commonEditParentComponent_1.CommonEditParentComponent, canActivate: [auth_service_1.AuthGuard] }
                ]
            },
            {
                path: 'whstatus', children: [
                    { path: '', component: StatusWhList_component_1.StatusWhListComponent, canActivate: [auth_service_1.AuthGuard] },
                    { path: 'edit/:id', component: commonEditParentComponent_1.CommonEditParentComponent, canActivate: [auth_service_1.AuthGuard] },
                    { path: 'new', component: commonEditParentComponent_1.CommonEditParentComponent, canActivate: [auth_service_1.AuthGuard] }
                ]
            },
            {
                path: 'import', children: [
                    { path: '', component: InPriceList_component_1.InPriceListComponent, canActivate: [auth_service_1.AuthGuard] },
                    { path: 'edit/:id', component: commonEditParentComponent_1.CommonEditParentComponent, canActivate: [auth_service_1.AuthGuard] },
                    { path: 'new', component: commonEditParentComponent_1.CommonEditParentComponent, canActivate: [auth_service_1.AuthGuard] }
                ]
            },
        ]
    },
    {
        path: 'settings', canActivate: [auth_service_1.AuthGuard], children: [
            { path: '', component: directoryMain_component_1.DirectoryMainComponent, canActivate: [auth_service_1.AuthGuard] },
            {
                path: 'currency', children: [
                    { path: '', component: currencyList_component_1.CurrencyListComponent, canActivate: [auth_service_1.AuthGuard] },
                    { path: 'edit/:id', component: commonEditParentComponent_1.CommonEditParentComponent, canActivate: [auth_service_1.AuthGuard] },
                    { path: 'new', component: commonEditParentComponent_1.CommonEditParentComponent, canActivate: [auth_service_1.AuthGuard] }
                ]
            },
            {
                path: 'measure', children: [
                    { path: '', component: measureList_component_1.MeasureListComponent, canActivate: [auth_service_1.AuthGuard] },
                    { path: 'edit/:id', component: commonEditParentComponent_1.CommonEditParentComponent, canActivate: [auth_service_1.AuthGuard] },
                    { path: 'new', component: commonEditParentComponent_1.CommonEditParentComponent, canActivate: [auth_service_1.AuthGuard] }
                ]
            },
            {
                path: 'country', children: [
                    { path: '', component: countryList_component_1.CountryListComponent, canActivate: [auth_service_1.AuthGuard] },
                    { path: 'edit/:id', component: commonEditParentComponent_1.CommonEditParentComponent, canActivate: [auth_service_1.AuthGuard] },
                    { path: 'new', component: commonEditParentComponent_1.CommonEditParentComponent, canActivate: [auth_service_1.AuthGuard] }
                ]
            },
            {
                path: 'parameter', children: [
                    { path: '', component: parameterList_component_1.ParameterListComponent, canActivate: [auth_service_1.AuthGuard] },
                    { path: 'edit/:id', component: commonEditParentComponent_1.CommonEditParentComponent, canActivate: [auth_service_1.AuthGuard] },
                    { path: 'new', component: commonEditParentComponent_1.CommonEditParentComponent, canActivate: [auth_service_1.AuthGuard] }
                ]
            },
            {
                path: 'organization', children: [
                    { path: '', component: organizationList_component_1.OrganizationListComponent, canActivate: [auth_service_1.AuthGuard] },
                    { path: 'edit/:id', component: commonEditParentComponent_1.CommonEditParentComponent, canActivate: [auth_service_1.AuthGuard] },
                    { path: 'new', component: commonEditParentComponent_1.CommonEditParentComponent, canActivate: [auth_service_1.AuthGuard] }
                ]
            },
            {
                path: 'city', children: [
                    { path: '', component: cityList_component_1.CityListComponent, canActivate: [auth_service_1.AuthGuard] },
                    { path: 'edit/:id', component: commonEditParentComponent_1.CommonEditParentComponent, canActivate: [auth_service_1.AuthGuard] },
                    { path: 'new', component: commonEditParentComponent_1.CommonEditParentComponent, canActivate: [auth_service_1.AuthGuard] }
                ]
            },
            {
                path: 'right', children: [
                    { path: '', component: rightList_component_1.RightListComponent, canActivate: [auth_service_1.AuthGuard] },
                    { path: 'edit/:id', component: commonEditParentComponent_1.CommonEditParentComponent, canActivate: [auth_service_1.AuthGuard] },
                    { path: 'new', component: commonEditParentComponent_1.CommonEditParentComponent, canActivate: [auth_service_1.AuthGuard] }
                ]
            },
            {
                path: 'role', children: [
                    { path: '', component: roleList_component_1.RoleListComponent, canActivate: [auth_service_1.AuthGuard] },
                    { path: 'edit/:id', component: roleEdit_component_1.RoleEditComponent, canActivate: [auth_service_1.AuthGuard] },
                    { path: 'new', component: roleNew_component_1.RoleNewComponent, canActivate: [auth_service_1.AuthGuard] }
                ]
            },
            {
                path: 'user', children: [
                    { path: '', component: userList_component_1.UserListComponent, canActivate: [auth_service_1.AuthGuard] },
                    { path: 'edit/:id', component: userEdit_component_1.UserEditComponent, canActivate: [auth_service_1.AuthGuard] },
                    { path: 'new', component: userNew_component_1.UserNewComponent, canActivate: [auth_service_1.AuthGuard] }
                ]
            },
            {
                path: 'extension', children: [
                    { path: '', component: ExtensionList_component_1.ExtensionListComponent, canActivate: [auth_service_1.AuthGuard] },
                    { path: 'edit/:id', component: commonEditParentComponent_1.CommonEditParentComponent, canActivate: [auth_service_1.AuthGuard] },
                    { path: 'new', component: commonEditParentComponent_1.CommonEditParentComponent, canActivate: [auth_service_1.AuthGuard] }
                ]
            },
            {
                path: 'separatorLine', children: [
                    { path: '', component: SeparatorLineList_component_1.SeparatorLineListComponent, canActivate: [auth_service_1.AuthGuard] },
                    { path: 'edit/:id', component: commonEditParentComponent_1.CommonEditParentComponent, canActivate: [auth_service_1.AuthGuard] },
                    { path: 'new', component: commonEditParentComponent_1.CommonEditParentComponent, canActivate: [auth_service_1.AuthGuard] }
                ]
            },
            {
                path: 'logger', children: [
                    { path: '', component: loggerList_component_1.LoggerListComponent, canActivate: [auth_service_1.AuthGuard] },
                ]
            },
        ]
    },
    {
        path: 'main', children: [
            { path: '', component: main_component_1.MainComponent, canActivate: [auth_service_1.AuthGuard] },
        ]
    },
    { path: 'analytics', component: analyticsMain_component_1.AnalyticsMainComponent, canActivate: [auth_service_1.AuthGuard] },
    { path: 'notice', component: notice_component_1.NoticeComponent, canActivate: [auth_service_1.AuthGuard] },
    indexRoute,
    fallbackRoute
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    }),
    __metadata("design:paramtypes", [])
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map