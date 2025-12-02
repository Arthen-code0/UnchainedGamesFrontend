import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestrosProductos } from './nuestros-productos';

describe('NuestrosProductos', () => {
  let component: NuestrosProductos;
  let fixture: ComponentFixture<NuestrosProductos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuestrosProductos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuestrosProductos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
