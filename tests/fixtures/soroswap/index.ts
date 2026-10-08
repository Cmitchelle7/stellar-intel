/**
 * tests/fixtures/soroswap/index.ts
 *
 * Typed loader for the real Soroswap API responses captured under
 * tests/fixtures/soroswap/*.json (issue #1084).
 *
 * Every fixture file has the shape:
 *   { capturedAt, capturedFrom, status, body, responseHeaders }
 *
 * The bodies are the raw JSON the Soroswap aggregator actually returned on
 * the capturedAt date. Re-capture at any time with:
 *   node scripts/capture-soroswap-fixtures.mjs
 */
import forbidden from './403-forbidden.json';
import noPathFound from './400-no-path-found.json';
import invalidAddress from './400-invalid-address.json';
import badProtocol from './400-bad-protocol.json';

export interface SoroswapFixture {
  capturedAt: string;
  capturedFrom: { method: string; url: string };
  status: number;
  body: unknown;
  responseHeaders: Record<string, string>;
}

export const FIXTURE_403_FORBIDDEN: SoroswapFixture = forbidden as SoroswapFixture;
export const FIXTURE_400_NO_PATH_FOUND: SoroswapFixture = noPathFound as SoroswapFixture;
export const FIXTURE_400_INVALID_ADDRESS: SoroswapFixture = invalidAddress as SoroswapFixture;
export const FIXTURE_400_BAD_PROTOCOL: SoroswapFixture = badProtocol as SoroswapFixture;

export const SOROSWAP_FIXTURES: ReadonlyArray<{ name: string; fixture: SoroswapFixture }> = [
  { name: '403-forbidden', fixture: FIXTURE_403_FORBIDDEN },
  { name: '400-no-path-found', fixture: FIXTURE_400_NO_PATH_FOUND },
  { name: '400-invalid-address', fixture: FIXTURE_400_INVALID_ADDRESS },
  { name: '400-bad-protocol', fixture: FIXTURE_400_BAD_PROTOCOL },
];

// Re-export the asset constants used by the tests so they no longer live in
// the (now removed) soroswap-retry.ts fixture module.
export const USDC_CONTRACT = 'CBBHRKEP5M3NUDRISGLJKGHDHX3DA2CN2AZBQY6WLVUJ7VNLGSKBDUCM';
export const XLM_CONTRACT = 'CDLZFC3SYJYDZT7K67VZ75HPJVIEUVNIXF47ZG2FB2RMQQVU2HHGCYSC';