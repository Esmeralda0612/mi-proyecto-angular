import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { LibroD } from '../../common/libro';
import { DataService } from '../../servicios/data.service';

@Component({
  selector: 'app-catalogo-productos',
  imports: [RouterModule, RouterLink],
  templateUrl: './catalogo-productos.component.html',
  styleUrl: './catalogo-productos.component.css'
})
export class CatalogoProductosComponent  implements OnInit{

  LibroONE!: LibroD;

  constructor(
    private dataservice: DataService,
    private activatedRouted: ActivatedRoute,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //this.loadONEBook();
  }

  // loadONEBook() {
    // const id = this.activatedRouted.snapshot.params['alias'];

    // this.dataservice.getBOOKbyId(id).subscribe(
    //   {
    //     next: (data) => {
    //       this.LibroONE = data;
    //       console.log(this.LibroONE);
    //     },
    //     error: (err) => {
    //       console.error('Error data:', err);
    //     },
    //     complete: () => {
    //       console.log('completed');
    //     }
    //   }

    // );
  // }
}
