import { Injectable } from '@angular/core';

import { MenuTab } from '../_class/index';
import { MenuData } from '../data/menu.data';
import { ProfileMenuData } from '../data/profile-menu.data';

@Injectable()
export class MenuService {
    getMenuTabs(): Promise<MenuTab[]> {
        return Promise.resolve(MenuData);
    }
    getProfileMenuTabs(): Promise<MenuTab[]> {
        return Promise.resolve(ProfileMenuData);
    }
}
