import { HeroService } from '../../hero.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroesComponent } from './heroes.component';
import { RouterLinkStubDirective } from '../../testing/router-stubs';
import { RouterOutletStubComponent } from '../../testing/router-stubs';
var heroesService;
var HeroServiceStub;
var spy;
describe('HeroesComponent', () => {
    let component: HeroesComponent;
    let fixture: ComponentFixture<HeroesComponent>;

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            providers: [{ provide: HeroService, useValue: HeroServiceStub }],
            declarations: [
                RouterLinkStubDirective, RouterOutletStubComponent, HeroesComponent
            ]
        }).compileComponents()
            .then(() => {
                // fixture = TestBed.createComponent(AppComponent);
                // comp = fixture.componentInstance;
            });

        // UserService from the root injector
        // messageService = TestBed.get(MessageService);
        heroesService = TestBed.get(HeroService);
        spy = spyOn(heroesService, 'getHeroes').and.returnValue("ok");
        //  get the "welcome" element by CSS selector (e.g., by class name)
        // de = fixture.debugElement.query(By.css('.welcome'));
        // el = de.nativeElement;
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeroesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
