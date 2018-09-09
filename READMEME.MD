- npm i bootstrap font-awesome
  import in root index.css
- the application look to the angular module that owns this component to find all the directives that're visible to this component
  every app must have at least one module, commonly called AppModule.
  a component must belong to one and only one Angular module,
  `bacause the app Module declare the AppComponent, the AppComponent belong to the AppModule, the AppModule bootstrap the application with this component, so it's the first component that's loaded for our component`
  - when a `component` contains directives. Angular looks to the `components's module`(caution module) to determine which directives are visible to that component
  - if a directive was declared within another Module, we can simplely import that module, such as we imoport `BrowserModule`

# bindings

our directives, components, and pipes are declared in `declarations`

1.  interpolation

-structural directive
`*ngif`

- [] property binding
- () event binding
- [(ngModel)] two-way binding

## transform data with pipes

## Component Lifecycle

- onInit
- OnChanges
- onDestroy
-

# service

a code pattern in which a class recieves the instances of objects it needs

- are independent from any paticular component
- provide shared data or logic across component
- encapsulate external interactions

constructor(private http: HttpClient)
// assign the injected service instance to that variable

// before we can inject a service in as a dependency, we need to register the provider with Angular's injector
