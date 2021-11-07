export function Render($container, $newElement, $oldElement) {
    if($container.childElementCount && $oldElement) {
        $container.replaceChild($newElement, $oldElement);
        return;
    }
    
    $container.append($newElement);
}