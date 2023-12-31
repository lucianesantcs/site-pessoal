import { Component, Input, inject } from '@angular/core';
import { BreakpointsService } from '../../services/breakpoints/breakpoints.service';
import { ButtonComponent } from '../button/button.component';
import { LinkComponent } from '../link/link.component';
import { ILink } from '../link/link.interface';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [LinkComponent, ButtonComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  @Input({ required: true }) navLinks!: ILink[];

  private breakPoints = inject(BreakpointsService);
  protected isSMbreakPoint!: boolean;
  protected isMDbreakPoint!: boolean;

  constructor() {
    this.breakPoints.getBreakpoint(['sm', 'md']).subscribe(({ sm, md }) => {
      this.isSMbreakPoint = sm;
      this.isMDbreakPoint = md;
    });
  }
}
