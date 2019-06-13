## General

- (take as best practices but not set in stone): when structuring your app, inside `src` you should include a directory specific to the outter most component. For instance, `app` or `shell`.
- components should each have their own dir and house all associated files such as tests, subcomponents specific to the component, and style files. This makes it easier for people to assess what is going on and not have to jump around the repo to discover associated files.
- while I was taught with the component naming convention of camel case, sometimes build pipelines can only handle kebab casing (dashes example-component.jsx). this will be entirely dependent on the pipeline but something to keep in mind.
- in a production environment you will want to include unit tests for each commponent and any utility functions. generally speaking the naming convention is `<component-name>.spec.jsx`. in the case of typescript, it would be `.tsx`.
