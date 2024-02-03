import { CanDeactivateFn } from "@angular/router";
import { InsertarNoticiasComponent } from "../componentes/insertar-noticias/insertar-noticias.component";
import { Observable } from "rxjs/internal/Observable";

export const writingGuard: CanDeactivateFn<
    InsertarNoticiasComponent
> = (component: InsertarNoticiasComponent): any => {
    if (!component.isSent) {
        return confirm(
            "Are you sure you want to leave this page? If you do, any unsaved changes will be lost."
        );
    }
};
