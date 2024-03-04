# Framework agnostic architecture

This project includes an example of a framework-agnostic architecture implementation for front-end development.

---
## Structure
**Core** - directory for all business logic implementation.

This directory contains next directories:

**Repositories** 

In simple terms, a repository is a popular pattern in backend development that aids in managing access to data storage, such as databases. However, its implementation in frontend development differs because we don't use databases. In our context, a repository helps us access data via API calls to the server.


**Services**

This directory doesn't follow a specific pattern. It houses modules or classes that aid in data processing and handling various business use cases. As the project grows, services within this directory can be divided according to design patterns. For instance, if we need to change the interface of data received from a server to another interface, we can create a service using the adapter design pattern. However, for implementing specific business use cases, we can use Command or Interactor patterns.

**Controllers**

The Controller is a design pattern aimed at decoupling modules. Rather than containing specific logic, it delegates this to other specified modules. For instance, the controller doesn't call APIs directly, but instead calls a repository method. Similarly, it doesn't process data but delegates this task to services.

**Gateways**

The Gateway is an architectural pattern that bridges our business code base with external or third-party modules or services. In our context, gateways act as wrappers for third-party tools that we integrate into our services or repositories. This pattern helps encapsulate our core, maintaining independence from third-party tools.