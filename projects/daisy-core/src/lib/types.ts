import {TemplateRef} from "@angular/core";
import {ValidationErrors} from "@angular/forms";

export type ErrorComponentTemplate = TemplateRef<{ $implicit: ValidationErrors; text: string }>;
