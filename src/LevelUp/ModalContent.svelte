<script>
    import { getContext } from 'svelte';
    import { modalComponent } from '../stores';

    const { close, open } = getContext('simple-modal');

    const handleClose = () => {
        close();
        modalComponent.set(null);
    }

    const modalStyles = {
        styleWindow: {
            background: 'var(--light-color)',
            borderRadius: 0,
        },
        styleContent: {
            padding: 0,
        },
        styleCloseButton: {
            display: 'none'
        },
    };

    $: {
        if($modalComponent) open($modalComponent, { onClose: handleClose }, modalStyles);
    }
</script>

<span />