import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class ThemeService {
    private currentTheme: string;

    public currentThemeValue(value:string): string {
        if (value) {
            this.currentTheme = value;
            return this.currentTheme;
        }

    }
}