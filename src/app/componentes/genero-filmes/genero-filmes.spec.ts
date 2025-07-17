import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneroFilmes } from './genero-filmes';

describe('GeneroFilmes', () => {
  let component: GeneroFilmes;
  let fixture: ComponentFixture<GeneroFilmes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneroFilmes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneroFilmes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
