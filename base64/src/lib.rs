#![no_std]

// cargo b --target=wasm32-unknown-unknown

mod alloc;
mod b64;

#[global_allocator]
static WALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[unsafe(no_mangle)]
pub extern "C" fn add(a: i32, b: i32) -> i32 {
    // core::arch::wasm32::unreachable();
    a + b
}

#[cfg(target_arch = "wasm32")]
#[panic_handler]
pub fn panic(_info: &::core::panic::PanicInfo) -> ! {
    core::arch::wasm32::unreachable()
}
