## Motivation

Historically with ML@B, every time someone wants to update NMEP or create a decal, we end up starting from near scratch, which is insane since so many of the fundamentals of ML haven’t changed. We want to standardize and centralize all our resources with better visibility, version control and defined dependencies between content to decrease the amount of redundant work we do year to year. We call one of these standardized content units a **module**. A module can be used for one of the halves of an NMEP lecture, or an internal workshop, or a decal lecture. They are intended for reuse.

In the context of wiki, this also serves a secondary purpose. Wiki will house a lot of really advanced concepts in articles that may not otherwise be contextualized. Edu modules are a value add because they will talk about the ideas in more technical wiki pages at a high level and contextualize these developments. The hope is that instead of reading one technical wiki article and not know where to go next if the branching factor is high, people can go to the edu module that cites this technical article and get a more contexualized understanding of said technical article. Additionally, someone can understand how all the other technical branching articles are connected at a conceptual level.

## What Guides a Module

- **Principle 1: Reusability is key**
    - Each module in general should be geared towards no specific application or use case
        - This means don’t intertwine specific subject areas with slide decks that are prerequisites for multiple subject areas
        - For example: the intro deep learning slide deck shouldn’t include convnets as an example of a deep learning system, since the slide deck may be used for a sequence modeling course that has nothing to do with convnets
    - Defined dependencies (SUPER IMPORTANT!!!)
        - Better enables people to see how to make revamps or changes to modules without invalidating inheriting modules
    - Any topic/idea that would be brought up in multiple inheriting modules should be brought up in the parent module
        - For example: the intro slide deck teaches bias/variance since both lectures inheriting from it (classical ML 1 and deep learning 1) would both require a conceptual understanding of the bias/variance tradeoff
- **Principle 2: Containerization**
    - We want a high branching factor with module dependencies and minimal depth where possible, so think about not just the module you are currently designing, but what modules will come *after* and inherit
        - Multiple modules that have to follow one another indicates that you are half baking a bunch of ideas and slowly baking them more over time
        - A high branching factor shows that what you have is capable of standing on its own
        - In order to ensure customizability with future decals, NMEP, etc, we really want this high branching factor, allowing you to pick and choose which fully baked ideas you want
    - This brings up the notion of “containerization” which is to say make sure that things are self contained
        - Think about how modules will inherit from this module. If you need further explain content from a module we inherited from, you have half baked an idea and (with very rare exceptions) need to think about restructuring your content
        - Don't half bake. Do it right the first time instead

## Module Template 
- **Overview**
    - This is the TLDR for your module, so someone who doesn't understand the contents yet can see what this explains. Your knowledge objectives should be stated here: what do you want students to walk away understanding
- **Outline**
    - This is meant to help structure your thoughts on a module and get you past any apprehension of starting a new module (once begun is half done!)
    - Here you will (quickly) outline the slide deck, listing the topics, the ordering, and the **key insights / key analogies / key phrases you will use to hammer home the concepts.** Less time on listing minute details, more time writing the more information rich insights / analogies / specific phrasing
        - If done well, someone you’ve never met should be able to give a lecture with your slide deck after (quickly) reading the outline, understanding **how** you are trying to teach this module
    - Link to technical wiki articles with full derivations where you can
    - This is also a chance to brainstorm for some assignment ideas and readings
- **50 minute slide deck**
    - This is key to making sure we get maximum reusability
    - With 50 minute slide decks, you have greater agency over the time slots in which you teach
        - Example: say you want to teach a decal with 2 hours of lecture per week. You can either do two 50 minute lectures on Tuesday / Thursday or do a single 2 hour lecture on Monday by simply presenting both slide decks with a 10 minute stretch break in between modules.
    - Don’t include any slides for course logistics or course specific information
        - Makes sure that slide decks (except the root modules) can be used out of the box without customization needed
            - Only the root modules should be copied to separate drive and customized to include course specific demos for motivation on day 1
        - Logistics can be presented verbally or separate from the slide deck
    - If you make an update to the slide deck, make the changes sooner rather than later before someone else comes along with their own idea of how to update the slide deck (we don’t want 2 competing updated versions of the same slide deck)
    - Preferably use the prefab slide template linked in the “workflow pipeline” section of the workflow onboarding document to ensure nice formatting across all lectures
- **Assignments**
    - These are to reinforce learning and ensure maximal interaction with the material, and can be used before or after a lecture
        - Pre-Lecture assignments need to be used sparingly and with great intent, because they can be tiring and less fun, but can be useful when you need to squeeze 65 minutes of content into the 50 minute lecture
    - Auto-graded assignments on gradescope (no written components, but MCQ instead)
        - These are nice as they allow quick feedback on assignments and enable us to teach larger classes with less staff
        - Can be done on video and reading assignments
    - Written assignments
        - These are probably better when done through a gradescope text box to prevent scanning issues and legibility.
        - These should also be done sparingly to ensure quick turn around times for grades
    - Colab Notebooks can and should be used to ensure people have a chance to implement things they learned about in lecture
        - Can grade submissions of screenshots or auto-grade numerical results (like train accuracy after 10 epochs)
        - Should ask students to submit only a few results to avoid students submitting screenshots of entire notebook

## Surveys and One-Off Modules (Exceptions to the Rules)

- NMEP and super specific decals will eventually want to create some content that diverges from these principles. Towards the end of a cluster (like CV), to save time, NMEP and decals may want to do a lecture that surveys a lot of areas just to give students exposure. Decals specific to things like bio-ML may create content that is so specific, that it won’t be very reusable.
- These things happen, and we want to make sure the content is stored here even if it violates some of the guiding principles, but **it is important to minimize the frequency of occurrence to maximize reusability of this content repository**.