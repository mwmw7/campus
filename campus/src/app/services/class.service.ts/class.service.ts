import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { ClassResponseDto } from '../../dto/class-response.dto'

@Injectable({
    providedIn: 'root'
  })
  export class ClassService {
    private apiUrl = 'http://localhost:3000/courses';

    constructor(private http: HttpClient) {}
     

    // course
    getCourseData(): Observable<ClassResponseDto> {
        return this.http.get<ClassResponseDto>(this.apiUrl)
    }

    postCourseData(data: any): Observable<ClassResponseDto> {
        return this.http.post<ClassResponseDto>(this.apiUrl, data);
      }

    patchCourseData(id: string, data: any): Observable<ClassResponseDto> {
        return this.http.patch<ClassResponseDto>(`${this.apiUrl}/${id}`, data);
    }

    putCourseData(id: string, data: any): Observable<ClassResponseDto> {
        return this.http.put<ClassResponseDto>(`${this.apiUrl}/${id}`, data);
    }

    deleteCourseData(id: string): Observable<ClassResponseDto> {
        return this.http.delete<ClassResponseDto>(`${this.apiUrl}/${id}`);
    }


    // docname
    getDocNameData(): Observable<ClassResponseDto> {
        return this.http.get<ClassResponseDto>(this.apiUrl)
    }

    postDocNameData(data: any): Observable<ClassResponseDto> {
        return this.http.post<ClassResponseDto>(this.apiUrl, data);
      }

    patchDocNameData(id: string, data: any): Observable<ClassResponseDto> {
        return this.http.patch<ClassResponseDto>(`${this.apiUrl}/${id}`, data);
    }

    putDocNameData(id: string, data: any): Observable<ClassResponseDto> {
        return this.http.put<ClassResponseDto>(`${this.apiUrl}/${id}`, data);
    }

    deleteDocNameData(id: string): Observable<ClassResponseDto> {
        return this.http.delete<ClassResponseDto>(`${this.apiUrl}/${id}`);
    }


    // coursedoc
    getCourseDocData(): Observable<ClassResponseDto> {
        return this.http.get<ClassResponseDto>(this.apiUrl)
    }

    postCourseDocData(data: any): Observable<ClassResponseDto> {
        return this.http.post<ClassResponseDto>(this.apiUrl, data);
      }

    patchCourseDocData(id: string, data: any): Observable<ClassResponseDto> {
        return this.http.patch<ClassResponseDto>(`${this.apiUrl}/${id}`, data);
    }

    putCourseDocData(id: string, data: any): Observable<ClassResponseDto> {
        return this.http.put<ClassResponseDto>(`${this.apiUrl}/${id}`, data);
    }

    deleteCourseDocData(id: string): Observable<ClassResponseDto> {
        return this.http.delete<ClassResponseDto>(`${this.apiUrl}/${id}`);
    }


    // video topic
    getVideoTopicData(): Observable<ClassResponseDto> {
        return this.http.get<ClassResponseDto>(this.apiUrl)
    }

    postVideoTopicData(data: any): Observable<ClassResponseDto> {
        return this.http.post<ClassResponseDto>(this.apiUrl, data);
      }

    patchVideoTopicData(id: string, data: any): Observable<ClassResponseDto> {
        return this.http.patch<ClassResponseDto>(`${this.apiUrl}/${id}`, data);
    }

    putVideoTopicData(id: string, data: any): Observable<ClassResponseDto> {
        return this.http.put<ClassResponseDto>(`${this.apiUrl}/${id}`, data);
    }

    deleteVideoTopicData(id: string): Observable<ClassResponseDto> {
        return this.http.delete<ClassResponseDto>(`${this.apiUrl}/${id}`);
    }


    // video
    getVideoData(): Observable<ClassResponseDto> {
        return this.http.get<ClassResponseDto>(this.apiUrl)
    }

    postVideoData(data: any): Observable<ClassResponseDto> {
        return this.http.post<ClassResponseDto>(this.apiUrl, data);
      }

    patchVideoData(id: string, data: any): Observable<ClassResponseDto> {
        return this.http.patch<ClassResponseDto>(`${this.apiUrl}/${id}`, data);
    }

    putVideoData(id: string, data: any): Observable<ClassResponseDto> {
        return this.http.put<ClassResponseDto>(`${this.apiUrl}/${id}`, data);
    }

    deleteVideoData(id: string): Observable<ClassResponseDto> {
        return this.http.delete<ClassResponseDto>(`${this.apiUrl}/${id}`);
    }


    // getData1(): Observable<ApiResponse<DocNamewithCourseDocResponseData[]>> {
    //     return this.http.get(this.apiUrl)
    //     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    //     return this.http.get<ApiResponse<DocNamewithCourseDocResponseData[]>>(`${this.apiUrl}`, { headers, withCredentials: true });
    // }

    getData2(): Observable<any> {
        return this.http.get(this.apiUrl).pipe(
          catchError(error => {
            console.error('Error occurred:', error);
            return of([]);  // 에러 발생 시 빈 배열 반환
          })
        );
    }
  }
