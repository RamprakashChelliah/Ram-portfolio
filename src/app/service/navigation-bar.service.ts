import { Injectable } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class NavigationBarService {
    private aboutActiveSource = new BehaviorSubject<boolean>(false);
    aboutActive$ = this.aboutActiveSource.asObservable();

    constructor(private router: Router) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                const url = event.urlAfterRedirects;
                const isActive =
                    url.startsWith('/about') ||
                    url.startsWith('/projects') ||
                    url.startsWith('/modules') ||
                    url.startsWith('/companies');
                this.aboutActiveSource.next(isActive);
            }
        });
    }
}