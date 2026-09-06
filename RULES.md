# Portfolio — RULES.md

## Product
1. This is an original portfolio, not a clone.
2. Visual effects must serve storytelling.
3. Content must be editable through admin.
4. Public content should remain understandable without heavy effects.

## Architecture
5. Next.js owns public presentation.
6. Laravel owns data, business rules, CMS, and authorization.
7. MySQL is accessed only by Laravel.
8. Filament is the admin interface.
9. API contracts are versioned.
10. Content and presentation remain separate.

## CMS
11. Never hardcode projects in JSX.
12. Never hardcode experience in JSX.
13. Never duplicate navigation definitions.
14. Published content requires explicit status.
15. Slugs are unique.
16. Admin can only use allowlisted components/settings.
17. Admin cannot inject JavaScript, CSS, JSX, or SQL.

## Animation
18. Prefer CSS for trivial transitions.
19. Use GSAP for complex choreography.
20. Use ScrollTrigger for scroll-driven animation.
21. Use @gsap/react useGSAP in React.
22. Clean up animation contexts.
23. Avoid global animation selectors.
24. Respect prefers-reduced-motion.
25. Never make critical content dependent on animation.
26. Avoid layout-thrashing properties.
27. Do not add effects only to appear impressive.

## 3D
28. Three.js is optional.
29. 3D must have a purpose.
30. Lazy-load WebGL.
31. Provide fallback.
32. Reduce complexity on mobile.
33. Respect reduced motion.
34. Never make WebGL the only way to understand content.

## Performance
35. Optimize images.
36. Lazy-load non-critical media.
37. Avoid excessive client components.
38. Keep JS payload reasonable.
39. Monitor Core Web Vitals.
40. Do not load multiple libraries for the same animation problem.

## Security
41. Never expose secrets.
42. Validate contact forms server-side.
43. Rate-limit public write endpoints.
44. Keep private storage private.
45. Audit important administrative changes.

## Accessibility
46. Keyboard navigation works.
47. Focus states are visible.
48. Contrast is sufficient.
49. Interactive icons have accessible labels.
50. Motion is not the only information channel.
51. Respect reduced motion.

## Testing
52. Test API contracts.
53. Test admin authorization.
54. Test contact submission.
55. Test public routes.
56. Test responsive behavior.
57. Test reduced-motion behavior.
