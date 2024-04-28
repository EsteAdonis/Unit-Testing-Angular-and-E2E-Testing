import { TestBed } from '@angular/core/testing';
import { ApiServiceTsService } from './api.service.ts.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TagInterface } from './tag.interface';
import { HttpErrorResponse } from '@angular/common/http';

describe('ApiServiceTsService', () => {
  let apiService: ApiServiceTsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    apiService = TestBed.inject(ApiServiceTsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(apiService).toBeTruthy();
  });

  it('Should return a list of tags', () => {
    let tags: TagInterface[] | undefined;
    apiService.getTags().subscribe(response => {
      tags = response;
    });

    const req = httpTestingController.expectOne('http://localhost:3004/tags');
    req.flush([{ id: '1', name: 'foo' }])
    expect(tags).toEqual([{ id: '1', name: 'foo' }]);
  });

  it('Should create a tag', () => {
    let tag: TagInterface | undefined;
    apiService.createTag('foo').subscribe(response => {
      tag = response;
    })
    const req = httpTestingController.expectOne('http://localhost:3004/tags');
    req.flush({ id: '1', name: 'foo' })
    expect(tag).toEqual({ id: '1', name: 'foo' });
  });

  it('Should check the correct body', () => {
    let tag: TagInterface | undefined;
    apiService.createTag('foo').subscribe(response => {
      tag = response;
    })
    const req = httpTestingController.expectOne('http://localhost:3004/tags');
    req.flush({ id: '1', name: 'foo' })
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual({ name: 'foo' });
  });

  it('Should return an error', () => {
    let actualError: HttpErrorResponse | undefined;
    apiService.createTag('foo').subscribe({
      next: () => fail('Success should not be called'),  // fail => Explicity mark a spec as fail
      error: err => actualError = err
    });

    const req = httpTestingController.expectOne('http://localhost:3004/tags');
    req.flush('Server error', {
      status: 422,
      statusText: 'Unprocessable entity'
    });
    if (!actualError) {
      throw new Error('Error needs to be defined');
    }
    expect(actualError.status).toEqual(422);
    expect(actualError.statusText).toEqual('Unprocessable entity');
  });

});
